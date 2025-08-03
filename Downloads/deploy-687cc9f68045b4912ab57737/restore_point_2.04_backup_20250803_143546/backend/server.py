from fastapi import FastAPI, APIRouter, HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime, timedelta
import bcrypt
import jwt
from geopy.geocoders import Nominatim
import asyncio

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Security
security = HTTPBearer()
JWT_SECRET = os.environ.get('JWT_SECRET', 'your-secret-key-here')
JWT_ALGORITHM = 'HS256'

# Models
class UserRole(str):
    ADMIN = "admin"
    MANAGER = "manager"
    OPERATOR = "operator"

class UserPermissions(BaseModel):
    # Module access permissions
    modules: dict = {
        "dashboard": True,
        "companies": False,
        "locations": False,
        "providers": False,
        "cabinets": False,
        "game_mixes": False,
        "slot_machines": False,
        "invoices": False,
        "onjn_reports": False,
        "legal_documents": False,
        "metrology": False,
        "jackpots": False,
        "users": False
    }
    # Action permissions per module
    actions: dict = {
        "companies": {"create": False, "read": False, "update": False, "delete": False},
        "locations": {"create": False, "read": False, "update": False, "delete": False},
        "providers": {"create": False, "read": False, "update": False, "delete": False},
        "cabinets": {"create": False, "read": False, "update": False, "delete": False},
        "game_mixes": {"create": False, "read": False, "update": False, "delete": False},
        "slot_machines": {"create": False, "read": False, "update": False, "delete": False},
        "invoices": {"create": False, "read": False, "update": False, "delete": False},
        "onjn_reports": {"create": False, "read": False, "update": False, "delete": False},
        "legal_documents": {"create": False, "read": False, "update": False, "delete": False},
        "metrology": {"create": False, "read": False, "update": False, "delete": False},
        "jackpots": {"create": False, "read": False, "update": False, "delete": False},
        "users": {"create": False, "read": False, "update": False, "delete": False}
    }
    # Accessible companies and locations
    accessible_companies: List[str] = []
    accessible_locations: List[str] = []

class User(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    username: str
    email: str
    phone: Optional[str] = None
    password_hash: str
    first_name: str = ""  # Numele
    last_name: str = ""   # Prenumele
    role: str = UserRole.ADMIN
    assigned_locations: List[str] = []  # Location IDs user has access to
    permissions: UserPermissions = Field(default_factory=UserPermissions)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    is_active: bool = True

class UserCreate(BaseModel):
    username: str
    email: str
    phone: Optional[str] = None
    password: str
    first_name: str = ""
    last_name: str = ""
    role: str = UserRole.ADMIN
    assigned_locations: List[str] = []
    permissions: Optional[UserPermissions] = None

class UserUpdate(BaseModel):
    username: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    password: Optional[str] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    role: Optional[str] = None
    assigned_locations: Optional[List[str]] = None
    permissions: Optional[UserPermissions] = None
    is_active: Optional[bool] = None

class UserLogin(BaseModel):
    username: str
    password: str

class Company(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    registration_number: str
    tax_id: str
    address: str
    phone: str
    email: str
    website: Optional[str] = None
    contact_person: str
    status: str = "active"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str

class CompanyCreate(BaseModel):
    name: str
    registration_number: str
    tax_id: str
    address: str
    phone: str
    email: str
    website: Optional[str] = None
    contact_person: str

class Location(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    address: str
    city: str
    county: str
    country: str = "Romania"
    postal_code: str
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    company_id: str
    manager_id: Optional[str] = None
    manager_phone: Optional[str] = None
    manager_email: Optional[str] = None
    contact_person_type: Optional[str] = "manual"
    contact_person_id: Optional[str] = None
    contact_person: Optional[str] = None
    contact_email: Optional[str] = None
    contact_phone: Optional[str] = None
    status: str = "active"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str

class LocationCreate(BaseModel):
    name: str
    address: str
    city: str
    county: str
    country: str = "Romania"
    postal_code: str
    company_id: str
    manager_id: Optional[str] = None
    manager_phone: Optional[str] = None
    manager_email: Optional[str] = None
    contact_person_type: Optional[str] = "manual"
    contact_person_id: Optional[str] = None
    contact_person: Optional[str] = None
    contact_email: Optional[str] = None
    contact_phone: Optional[str] = None

class Provider(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    company_name: str
    contact_person: str
    email: str
    phone: str
    address: str
    website: Optional[str] = None
    status: str = "active"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str

class ProviderCreate(BaseModel):
    name: str
    company_name: str
    contact_person: str
    email: str
    phone: str
    address: str
    website: Optional[str] = None

class GameMix(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    description: str
    provider_id: str
    game_count: int
    games: List[str]
    status: str = "active"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str

class GameMixCreate(BaseModel):
    name: str
    description: str
    provider_id: str
    games: List[str]

class Cabinet(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    model: Optional[str] = None
    provider_id: str
    status: str = "active"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str

class CabinetCreate(BaseModel):
    name: str
    model: Optional[str] = None
    provider_id: str

class CabinetUpdate(BaseModel):
    name: Optional[str] = None
    model: Optional[str] = None
    provider_id: Optional[str] = None
class SlotMachine(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    cabinet_id: str
    game_mix_id: str
    provider_id: str
    model: str
    serial_number: str  # Unique identifier for invoicing
    denomination: float
    max_bet: float
    rtp: float  # Return to Player percentage
    gaming_places: int
    commission_date: Optional[datetime] = None
    invoice_number: Optional[str] = None  # From invoices table
    status: str = "active"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str
    location_id: Optional[str] = None
    production_year: Optional[int] = None
    # Property fields
    ownership_type: Optional[str] = None  # "property" or "rent"
    owner_company_id: Optional[str] = None  # Company that owns the slot
    lease_provider_id: Optional[str] = None  # Provider for rented slots
    lease_contract_number: Optional[str] = None  # Contract number for rented slots

class SlotMachineCreate(BaseModel):
    cabinet_id: str
    game_mix_id: str
    provider_id: str
    model: str
    serial_number: str
    denomination: float
    max_bet: float
    rtp: float
    gaming_places: int
    commission_date: Optional[datetime] = None
    invoice_number: Optional[str] = None
    status: Optional[str] = "active"
    location_id: Optional[str] = None
    production_year: Optional[int] = None
    # Property fields
    ownership_type: Optional[str] = None  # "property" or "rent"
    owner_company_id: Optional[str] = None  # Company that owns the slot
    lease_provider_id: Optional[str] = None  # Provider for rented slots
    lease_contract_number: Optional[str] = None  # Contract number for rented slots

class Attachment(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    filename: str
    original_filename: str
    file_size: int
    mime_type: str
    file_data: str  # base64 encoded file data
    entity_type: str  # users, providers, cabinets, game_mixes, slots, invoices, onjn, legal, metrology, jackpots
    entity_id: str
    uploaded_by: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class AttachmentCreate(BaseModel):
    filename: str
    original_filename: str
    file_size: int
    mime_type: str
    file_data: str
    entity_type: str
    entity_id: str

class Invoice(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    invoice_number: str
    company_id: str
    location_id: str
    buyer_id: Optional[str] = None  # ID of the buyer company
    seller_id: Optional[str] = None  # ID of the seller provider
    serial_numbers: str  # Space-separated serial numbers
    issue_date: datetime
    due_date: datetime
    amount: float
    currency: str = "EUR"
    status: str = "pending"  # pending, paid, overdue
    description: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str

class InvoiceCreate(BaseModel):
    invoice_number: str
    company_id: str
    location_id: str
    buyer_id: Optional[str] = None
    seller_id: Optional[str] = None
    serial_numbers: str
    issue_date: datetime
    due_date: datetime
    amount: float
    currency: str = "EUR"
    status: str = "pending"
    description: str

class ONJNReport(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    report_number: str
    report_type: str  # monthly, quarterly, annual
    company_id: str
    location_id: str
    report_date: datetime
    submission_date: Optional[datetime] = None
    status: str = "draft"  # draft, submitted, approved, rejected
    equipment_data: dict
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str

class ONJNReportCreate(BaseModel):
    report_number: str
    report_type: str
    company_id: str
    location_id: str
    report_date: datetime
    equipment_data: dict

class LegalDocument(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    document_type: str  # license, permit, certificate, contract
    company_id: str
    location_id: Optional[str] = None
    issue_date: datetime
    expiry_date: Optional[datetime] = None
    issuing_authority: str
    status: str = "active"  # active, expired, revoked
    description: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str

class LegalDocumentCreate(BaseModel):
    title: str
    document_type: str
    company_id: str
    location_id: Optional[str] = None
    issue_date: datetime
    expiry_date: Optional[datetime] = None
    issuing_authority: str
    description: str

# Metrology Module
class Metrology(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    serial_number: str  # Links to slot machine
    certificate_number: str
    certificate_type: str  # calibration, verification, certification
    issue_date: datetime
    expiry_date: datetime
    issuing_authority: str
    calibration_interval: int  # months
    next_calibration_date: datetime
    cvt_type: Optional[str] = None  # CVT type field
    cvt_expiry_date: Optional[datetime] = None  # CVT expiry date field
    status: str = "active"  # active, expired, pending
    description: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str

class MetrologyCreate(BaseModel):
    serial_number: str
    certificate_number: str
    certificate_type: str
    issue_date: datetime
    expiry_date: datetime
    issuing_authority: str
    calibration_interval: int
    cvt_type: Optional[str] = None  # CVT type field
    cvt_expiry_date: Optional[datetime] = None  # CVT expiry date field
    status: Optional[str] = "active"
    description: str

# Jackpot Module
class Jackpot(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    serial_number: str  # Links to slot machine
    jackpot_type: str  # progressive, fixed, mystery
    jackpot_name: str
    increment_rate: float  # percentage
    level_1: Optional[str] = None
    level_2: Optional[str] = None
    level_3: Optional[str] = None
    level_4: Optional[str] = None
    level_5: Optional[str] = None
    last_reset_date: datetime
    next_reset_date: Optional[datetime] = None
    status: str = "active"  # active, inactive, won
    description: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    created_by: str

class JackpotCreate(BaseModel):
    serial_number: str
    jackpot_type: str
    jackpot_name: str
    increment_rate: float
    level_1: Optional[str] = None
    level_2: Optional[str] = None
    level_3: Optional[str] = None
    level_4: Optional[str] = None
    level_5: Optional[str] = None
    description: str

class DashboardStats(BaseModel):
    total_companies: int
    total_locations: int
    active_companies: int
    active_locations: int
    total_providers: int
    total_cabinets: int
    total_slot_machines: int
    active_equipment: int
    total_invoices: int
    total_onjn_reports: int
    total_legal_documents: int
    total_metrology: int
    total_jackpots: int
    total_users: int
    recent_activities: List[dict]

# Helper functions
def convert_objectid_to_str(data):
    """Convert MongoDB ObjectId to string for JSON serialization"""
    from bson import ObjectId
    
    if isinstance(data, ObjectId):
        return str(data)
    elif isinstance(data, dict):
        return {key: convert_objectid_to_str(value) for key, value in data.items()}
    elif isinstance(data, list):
        return [convert_objectid_to_str(item) for item in data]
    return data

def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

# Helper functions for access control
async def check_user_permission(user: User, module: str, action: str) -> bool:
    """Check if user has permission for specific module and action"""
    if user.role == UserRole.ADMIN:
        return True  # Admin has all permissions
    
    # Check if user has access to the module
    if not user.permissions.modules.get(module, False):
        return False
    
    # Check if user has permission for the specific action
    module_actions = user.permissions.actions.get(module, {})
    return module_actions.get(action, False)

async def get_user_accessible_locations(user: User) -> List[str]:
    """Get list of location IDs that user has access to"""
    if user.role == UserRole.ADMIN:
        # Admin sees all locations
        locations = await db.locations.find({}).to_list(1000)
        return [loc["id"] for loc in locations]
    else:
        # Use explicit permissions if available, fallback to assigned_locations
        if user.permissions.accessible_locations:
            return user.permissions.accessible_locations
        return user.assigned_locations

async def get_user_accessible_companies(user: User) -> List[str]:
    """Get list of company IDs that user has access to through locations"""
    if user.role == UserRole.ADMIN:
        # Admin sees all companies
        companies = await db.companies.find({}).to_list(1000)
        return [comp["id"] for comp in companies]
    else:
        # Use explicit permissions if available
        if user.permissions.accessible_companies:
            return user.permissions.accessible_companies
        
        # Get companies from accessible locations
        accessible_locations = await get_user_accessible_locations(user)
        locations = await db.locations.find({"id": {"$in": accessible_locations}}).to_list(1000)
        company_ids = list(set([loc["company_id"] for loc in locations if "company_id" in loc]))
        return company_ids

async def filter_by_user_access(user: User, query: dict, entity_type: str) -> dict:
    """Add access control filters to query based on user role and locations"""
    if user.role == UserRole.ADMIN:
        return query  # Admin sees everything
    
    if entity_type == "companies":
        accessible_companies = await get_user_accessible_companies(user)
        query["id"] = {"$in": accessible_companies}
    elif entity_type == "locations":
        accessible_locations = await get_user_accessible_locations(user)
        query["id"] = {"$in": accessible_locations}
    elif entity_type in ["cabinets", "slot_machines"]:
        accessible_locations = await get_user_accessible_locations(user)
        query["location_id"] = {"$in": accessible_locations}
    elif entity_type in ["providers", "game_mixes"]:
        # These are accessible to managers but not operators
        if user.role == UserRole.OPERATOR:
            # Operators can only see providers/game_mixes used in their locations
            accessible_locations = await get_user_accessible_locations(user)
            if entity_type == "providers":
                # Get providers used in accessible cabinets
                cabinets = await db.cabinets.find({"location_id": {"$in": accessible_locations}}).to_list(1000)
                provider_ids = list(set([cab["provider_id"] for cab in cabinets if "provider_id" in cab]))
                query["id"] = {"$in": provider_ids}
            elif entity_type == "game_mixes":
                # Get game mixes used in accessible slot machines
                slot_machines = await db.slot_machines.find({}).to_list(1000)
                accessible_slots = []
                for slot in slot_machines:
                    cabinet = await db.cabinets.find_one({"id": slot["cabinet_id"]})
                    if cabinet and cabinet["location_id"] in accessible_locations:
                        accessible_slots.append(slot)
                game_mix_ids = list(set([slot["game_mix_id"] for slot in accessible_slots if "game_mix_id" in slot]))
                query["id"] = {"$in": game_mix_ids}
    elif entity_type in ["invoices", "legal_documents"]:
        accessible_companies = await get_user_accessible_companies(user)
        accessible_locations = await get_user_accessible_locations(user)
        query["$or"] = [
            {"company_id": {"$in": accessible_companies}},
            {"location_id": {"$in": accessible_locations}}
        ]
    elif entity_type == "onjn_reports":
        accessible_companies = await get_user_accessible_companies(user)
        accessible_locations = await get_user_accessible_locations(user)
        query["$and"] = [
            {"company_id": {"$in": accessible_companies}},
            {"location_id": {"$in": accessible_locations}}
        ]
    
    return query

def verify_password(password: str, hashed: str) -> bool:
    try:
        # Ensure inputs are strings
        if not isinstance(password, str):
            password = str(password)
        if not isinstance(hashed, str):
            hashed = str(hashed)
        
        # Use bcrypt directly
        return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))
    except Exception as e:
        print(f"❌ Error in verify_password: {e}")
        return False

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(hours=24)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, JWT_SECRET, algorithm=JWT_ALGORITHM)

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        payload = jwt.decode(credentials.credentials, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        user_id: str = payload.get("sub")
        if user_id is None:
            raise HTTPException(status_code=401, detail="Invalid authentication credentials")
        
        user = await db.users.find_one({"id": user_id})
        if user is None:
            raise HTTPException(status_code=401, detail="User not found")
        return User(**user)
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")

async def geocode_address(address: str, city: str, country: str = "Romania"):
    try:
        geolocator = Nominatim(user_agent="financial_planner_pro")
        full_address = f"{address}, {city}, {country}"
        location = geolocator.geocode(full_address)
        if location:
            return location.latitude, location.longitude
        return None, None
    except Exception as e:
        print(f"Geocoding error: {e}")
        return None, None

# Routes
@api_router.post("/auth/register", response_model=dict)
async def register(user_data: UserCreate):
    # Check if user already exists
    existing_user = await db.users.find_one({"$or": [{"username": user_data.username}, {"email": user_data.email}]})
    if existing_user:
        raise HTTPException(status_code=400, detail="Username or email already registered")
    
    # Create new user
    user_dict = user_data.dict()
    user_dict["password_hash"] = hash_password(user_data.password)
    del user_dict["password"]
    # Ensure permissions is always a valid dict
    if not user_dict.get("permissions"):
        from pydantic import parse_obj_as
        user_dict["permissions"] = UserPermissions().dict()
    user_obj = User(**user_dict)
    await db.users.insert_one(user_obj.dict())
    
    return {"message": "User created successfully", "user_id": user_obj.id}

@api_router.post("/auth/login", response_model=dict)
async def login(user_data: UserLogin):
    print(f"🔍 Login attempt for username: {user_data.username}")
    
    user = await db.users.find_one({"username": user_data.username})
    print(f"👤 User found: {user is not None}")
    
    if not user:
        print("❌ User not found")
        raise HTTPException(status_code=401, detail="Invalid username or password")
    
    print(f"🔐 Hash from database: {user['password_hash']}")
    print(f"🔐 User ID: {user.get('id', 'N/A')}")
    print(f"🔐 Created at: {user.get('created_at', 'N/A')}")
    print(f"🔐 Password verification for user: {user['username']}")
    password_valid = verify_password(user_data.password, user["password_hash"])
    print(f"✅ Password valid: {password_valid}")
    
    if not password_valid:
        print("❌ Password invalid")
        raise HTTPException(status_code=401, detail="Invalid username or password")
    
    if not user.get("is_active", True):
        print("❌ Account inactive")
        raise HTTPException(status_code=401, detail="Account is inactive")
    
    print("🎉 Login successful, creating token")
    access_token = create_access_token(data={"sub": user["id"]})
    return {
        "access_token": access_token, 
        "token_type": "bearer", 
        "user": {
            "id": user["id"], 
            "username": user["username"], 
            "first_name": user.get("first_name", ""),
            "last_name": user.get("last_name", ""),
            "role": user["role"]
        }
    }

@api_router.get("/auth/me", response_model=dict)
async def get_current_user_info(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id, 
        "username": current_user.username, 
        "email": current_user.email, 
        "first_name": current_user.first_name,
        "last_name": current_user.last_name,
        "role": current_user.role
    }

@api_router.post("/companies", response_model=Company)
async def create_company(company_data: CompanyCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    # Check if company name already exists
    existing_company = await db.companies.find_one({"name": company_data.name})
    if existing_company:
        raise HTTPException(status_code=400, detail="Company name already exists")
    
    company_dict = company_data.dict()
    company_dict["created_by"] = current_user.id
    company_obj = Company(**company_dict)
    
    await db.companies.insert_one(company_obj.dict())
    return company_obj

@api_router.get("/companies", response_model=List[Company])
async def get_companies(current_user: User = Depends(get_current_user)):
    query = await filter_by_user_access(current_user, {}, "companies")
    companies = await db.companies.find(query).to_list(1000)
    # Convert ObjectIds to strings
    companies = [convert_objectid_to_str(company) for company in companies]
    return [Company(**company) for company in companies]

@api_router.get("/companies/{company_id}", response_model=Company)
async def get_company(company_id: str, current_user: User = Depends(get_current_user)):
    # Check if user has access to this company
    accessible_companies = await get_user_accessible_companies(current_user)
    if current_user.role != UserRole.ADMIN and company_id not in accessible_companies:
        raise HTTPException(status_code=403, detail="Access denied to this company")
    
    company = await db.companies.find_one({"id": company_id})
    if not company:
        raise HTTPException(status_code=404, detail="Company not found")
    return Company(**company)

@api_router.put("/companies/{company_id}", response_model=Company)
async def update_company(company_id: str, company_data: CompanyCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    company = await db.companies.find_one({"id": company_id})
    if not company:
        raise HTTPException(status_code=404, detail="Company not found")
    
    update_data = company_data.dict()
    await db.companies.update_one({"id": company_id}, {"$set": update_data})
    
    updated_company = await db.companies.find_one({"id": company_id})
    return Company(**updated_company)

@api_router.delete("/companies/{company_id}")
async def delete_company(company_id: str, current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    company = await db.companies.find_one({"id": company_id})
    if not company:
        raise HTTPException(status_code=404, detail="Company not found")
    
    # HARD DELETE - actually remove from database
    await db.companies.delete_one({"id": company_id})
    return {"message": "Company deleted successfully"}

@api_router.post("/companies/bulk-delete")
async def bulk_delete_companies(company_ids: List[str], current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    # Verify all companies exist
    companies = await db.companies.find({"id": {"$in": company_ids}}).to_list(1000)
    found_ids = {company["id"] for company in companies}
    missing_ids = set(company_ids) - found_ids
    
    if missing_ids:
        raise HTTPException(status_code=404, detail=f"Companies not found: {', '.join(missing_ids)}")
    
    # HARD DELETE - actually remove from database
    result = await db.companies.delete_many({"id": {"$in": company_ids}})
    
    return {"message": f"Successfully deleted {result.deleted_count} companies"}

@api_router.post("/locations", response_model=Location)
async def create_location(location_data: LocationCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    # Verify company exists
    company = await db.companies.find_one({"id": location_data.company_id})
    if not company:
        raise HTTPException(status_code=400, detail="Company not found")
    
    location_dict = location_data.dict()
    location_dict["created_by"] = current_user.id
    
    # If manager_id is provided, get manager details and populate phone/email
    if location_data.manager_id:
        manager = await db.users.find_one({"id": location_data.manager_id})
        if manager:
            location_dict["manager_phone"] = manager.get("phone", "")
            location_dict["manager_email"] = manager.get("email", "")
    
    # Geocode the address
    lat, lng = await geocode_address(location_data.address, location_data.city, location_data.country)
    location_dict["latitude"] = lat
    location_dict["longitude"] = lng
    
    location_obj = Location(**location_dict)
    await db.locations.insert_one(location_obj.dict())
    return location_obj

@api_router.get("/locations", response_model=List[Location])
async def get_locations(current_user: User = Depends(get_current_user)):
    query = await filter_by_user_access(current_user, {}, "locations")
    locations = await db.locations.find(query).to_list(1000)
    # Convert ObjectIds to strings
    locations = [convert_objectid_to_str(location) for location in locations]
    return [Location(**location) for location in locations]

@api_router.get("/locations/{location_id}", response_model=Location)
async def get_location(location_id: str, current_user: User = Depends(get_current_user)):
    # Check if user has access to this location
    accessible_locations = await get_user_accessible_locations(current_user)
    if current_user.role != UserRole.ADMIN and location_id not in accessible_locations:
        raise HTTPException(status_code=403, detail="Access denied to this location")
    
    location = await db.locations.find_one({"id": location_id})
    if not location:
        raise HTTPException(status_code=404, detail="Location not found")
    return Location(**location)

@api_router.put("/locations/{location_id}", response_model=Location)
async def update_location(location_id: str, location_data: LocationCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    location = await db.locations.find_one({"id": location_id})
    if not location:
        raise HTTPException(status_code=404, detail="Location not found")
    
    update_data = location_data.dict()
    
    # If manager_id is provided, get manager details and populate phone/email
    if location_data.manager_id:
        manager = await db.users.find_one({"id": location_data.manager_id})
        if manager:
            update_data["manager_phone"] = manager.get("phone", "")
            update_data["manager_email"] = manager.get("email", "")
    else:
        # Clear manager details if no manager is selected
        update_data["manager_phone"] = None
        update_data["manager_email"] = None
    
    # Geocode the address if changed
    if location_data.address != location.get("address") or location_data.city != location.get("city"):
        lat, lng = await geocode_address(location_data.address, location_data.city, location_data.country)
        update_data["latitude"] = lat
        update_data["longitude"] = lng
    
    await db.locations.update_one({"id": location_id}, {"$set": update_data})
    
    updated_location = await db.locations.find_one({"id": location_id})
    return Location(**updated_location)

@api_router.delete("/locations/{location_id}")
async def delete_location(location_id: str, current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    location = await db.locations.find_one({"id": location_id})
    if not location:
        raise HTTPException(status_code=404, detail="Location not found")
    
    # HARD DELETE - actually remove from database
    await db.locations.delete_one({"id": location_id})
    return {"message": "Location deleted successfully"}

@api_router.post("/locations/bulk-delete")
async def bulk_delete_locations(location_ids: List[str], current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    # Verify all locations exist
    locations = await db.locations.find({"id": {"$in": location_ids}}).to_list(1000)
    found_ids = {location["id"] for location in locations}
    missing_ids = set(location_ids) - found_ids
    
    if missing_ids:
        raise HTTPException(status_code=404, detail=f"Locations not found: {', '.join(missing_ids)}")
    
    # HARD DELETE - actually remove from database
    result = await db.locations.delete_many({"id": {"$in": location_ids}})
    
    return {"message": f"Successfully deleted {result.deleted_count} locations"}

@api_router.post("/providers", response_model=Provider)
async def create_provider(provider_data: ProviderCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    # Check if provider name already exists
    existing_provider = await db.providers.find_one({"name": provider_data.name})
    if existing_provider:
        raise HTTPException(status_code=400, detail="Provider name already exists")
    
    provider_dict = provider_data.dict()
    provider_dict["created_by"] = current_user.id
    provider_obj = Provider(**provider_dict)
    
    await db.providers.insert_one(provider_obj.dict())
    return provider_obj

@api_router.get("/providers", response_model=List[Provider])
async def get_providers(current_user: User = Depends(get_current_user)):
    query = await filter_by_user_access(current_user, {}, "providers")
    providers = await db.providers.find(query).to_list(1000)
    # Convert ObjectIds to strings
    providers = [convert_objectid_to_str(provider) for provider in providers]
    return [Provider(**provider) for provider in providers]

@api_router.get("/providers/{provider_id}", response_model=Provider)
async def get_provider(provider_id: str, current_user: User = Depends(get_current_user)):
    provider = await db.providers.find_one({"id": provider_id})
    if not provider:
        raise HTTPException(status_code=404, detail="Provider not found")
    return Provider(**provider)

@api_router.put("/providers/{provider_id}", response_model=Provider)
async def update_provider(provider_id: str, provider_data: ProviderCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    provider = await db.providers.find_one({"id": provider_id})
    if not provider:
        raise HTTPException(status_code=404, detail="Provider not found")
    
    update_data = provider_data.dict()
    await db.providers.update_one({"id": provider_id}, {"$set": update_data})
    
    updated_provider = await db.providers.find_one({"id": provider_id})
    return Provider(**updated_provider)

@api_router.delete("/providers/{provider_id}")
async def delete_provider(provider_id: str, current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    provider = await db.providers.find_one({"id": provider_id})
    if not provider:
        raise HTTPException(status_code=404, detail="Provider not found")
    
    # HARD DELETE - actually remove from database
    await db.providers.delete_one({"id": provider_id})
    return {"message": "Provider deleted successfully"}

@api_router.post("/game-mixes", response_model=GameMix)
async def create_game_mix(game_mix_data: GameMixCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    # Verify provider exists
    provider = await db.providers.find_one({"id": game_mix_data.provider_id})
    if not provider:
        raise HTTPException(status_code=400, detail="Provider not found")
    
    game_mix_dict = game_mix_data.dict()
    game_mix_dict["created_by"] = current_user.id
    game_mix_dict["game_count"] = len(game_mix_data.games)
    game_mix_obj = GameMix(**game_mix_dict)
    
    await db.game_mixes.insert_one(game_mix_obj.dict())
    return game_mix_obj

@api_router.get("/game-mixes", response_model=List[GameMix])
async def get_game_mixes(current_user: User = Depends(get_current_user)):
    query = await filter_by_user_access(current_user, {}, "game_mixes")
    game_mixes = await db.game_mixes.find(query).to_list(1000)
    # Convert ObjectIds to strings
    game_mixes = [convert_objectid_to_str(game_mix) for game_mix in game_mixes]
    return [GameMix(**game_mix) for game_mix in game_mixes]

@api_router.get("/game-mixes/{game_mix_id}", response_model=GameMix)
async def get_game_mix(game_mix_id: str, current_user: User = Depends(get_current_user)):
    game_mix = await db.game_mixes.find_one({"id": game_mix_id})
    if not game_mix:
        raise HTTPException(status_code=404, detail="Game mix not found")
    return GameMix(**game_mix)

@api_router.put("/game-mixes/{game_mix_id}", response_model=GameMix)
async def update_game_mix(game_mix_id: str, game_mix_data: GameMixCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    game_mix = await db.game_mixes.find_one({"id": game_mix_id})
    if not game_mix:
        raise HTTPException(status_code=404, detail="Game mix not found")
    
    update_data = game_mix_data.dict()
    update_data["game_count"] = len(game_mix_data.games)
    await db.game_mixes.update_one({"id": game_mix_id}, {"$set": update_data})
    
    updated_game_mix = await db.game_mixes.find_one({"id": game_mix_id})
    return GameMix(**updated_game_mix)

@api_router.delete("/game-mixes/{game_mix_id}")
async def delete_game_mix(game_mix_id: str, current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    game_mix = await db.game_mixes.find_one({"id": game_mix_id})
    if not game_mix:
        raise HTTPException(status_code=404, detail="Game mix not found")
    
    # HARD DELETE - actually remove from database
    await db.game_mixes.delete_one({"id": game_mix_id})
    return {"message": "Game mix deleted successfully"}

@api_router.post("/cabinets", response_model=Cabinet)
async def create_cabinet(cabinet_data: CabinetCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    # Verify provider exists
    provider = await db.providers.find_one({"id": cabinet_data.provider_id})
    if not provider:
        raise HTTPException(status_code=400, detail="Provider not found")
    
    cabinet_dict = cabinet_data.dict()
    cabinet_dict["created_by"] = current_user.id
    cabinet_obj = Cabinet(**cabinet_dict)
    
    await db.cabinets.insert_one(cabinet_obj.dict())
    return cabinet_obj

@api_router.get("/cabinets", response_model=List[Cabinet])
async def get_cabinets(current_user: User = Depends(get_current_user)):
    # Return all cabinets - FINAL SIMPLE VERSION
    try:
        cabinets = await db.cabinets.find({}).to_list(1000)
        result = []
        for cabinet in cabinets:
            # Create a simple dict
            cabinet_dict = {
                "id": str(cabinet["_id"]),
                "name": cabinet.get("name", ""),
                "model": cabinet.get("model", ""),
                "provider_id": cabinet.get("provider_id", ""),
                "status": cabinet.get("status", "active"),
                "created_at": "2025-07-31T00:00:00",
                "created_by": cabinet.get("created_by", "")
            }
            result.append(cabinet_dict)
        print(f"Returning {len(result)} cabinets from API")
        return result
    except Exception as e:
        print(f"Error in get_cabinets: {e}")
        return []

@api_router.get("/cabinets-simple")
async def get_cabinets_simple():
    # Simple endpoint without authentication
    try:
        cabinets = await db.cabinets.find({}).to_list(1000)
        result = []
        for cabinet in cabinets:
            cabinet_dict = {
                "id": str(cabinet["_id"]),
                "name": cabinet.get("name", ""),
                "model": cabinet.get("model", ""),
                "provider_id": cabinet.get("provider_id", ""),
                "status": cabinet.get("status", "active"),
                "created_at": "2025-07-31T00:00:00",
                "created_by": cabinet.get("created_by", "")
            }
            result.append(cabinet_dict)
        print(f"Simple endpoint returning {len(result)} cabinets")
        return result
    except Exception as e:
        print(f"Error in get_cabinets_simple: {e}")
        return []

@api_router.get("/cabinets-test", response_model=List[Cabinet])
async def get_cabinets_test():
    # Test endpoint without authentication
    cabinets = await db.cabinets.find({}).to_list(1000)
    # Convert ObjectIds to strings
    cabinets = [convert_objectid_to_str(cabinet) for cabinet in cabinets]
    return [Cabinet(**cabinet) for cabinet in cabinets]

@api_router.get("/cabinets/{cabinet_id}", response_model=Cabinet)
async def get_cabinet(cabinet_id: str, current_user: User = Depends(get_current_user)):
    # Try to find by _id first (ObjectId), then by id (UUID string)
    try:
        cabinet = await db.cabinets.find_one({"_id": ObjectId(cabinet_id)})
    except Exception as e:
        cabinet = await db.cabinets.find_one({"id": cabinet_id})
    
    if not cabinet:
        raise HTTPException(status_code=404, detail="Cabinet not found")
    return Cabinet(**cabinet)

@api_router.put("/cabinets/{cabinet_id}", response_model=Cabinet)
async def update_cabinet(cabinet_id: str, cabinet_data: CabinetUpdate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    # Try to find by _id first (ObjectId), then by id (UUID string)
    try:
        cabinet = await db.cabinets.find_one({"_id": ObjectId(cabinet_id)})
        query = {"_id": ObjectId(cabinet_id)}
    except:
        cabinet = await db.cabinets.find_one({"id": cabinet_id})
        query = {"id": cabinet_id}
    
    if not cabinet:
        raise HTTPException(status_code=404, detail="Cabinet not found")
    
    # Only update fields that are provided (not None)
    update_data = {}
    for field, value in cabinet_data.model_dump().items():
        if value is not None:
            update_data[field] = value
    
    if update_data:
        await db.cabinets.update_one(query, {"$set": update_data})
    
    updated_cabinet = await db.cabinets.find_one(query)
    
    if not updated_cabinet:
        raise HTTPException(status_code=404, detail="Cabinet not found after update")
    
    # Debug: Print the cabinet data to see what fields are present
    print(f"DEBUG: Cabinet data from DB: {updated_cabinet}")
    
    # Ensure all required fields are present for Cabinet model
    # Convert ObjectId to string for id field
    if '_id' in updated_cabinet:
        updated_cabinet['id'] = str(updated_cabinet['_id'])
    
    # Ensure created_by field exists (use existing or default)
    if 'created_by' not in updated_cabinet:
        print(f"DEBUG: created_by field missing, setting to: {current_user.id}")
        updated_cabinet['created_by'] = current_user.id
    
    # Ensure status field exists
    if 'status' not in updated_cabinet:
        updated_cabinet['status'] = "active"
    
    # Ensure created_at field exists
    if 'created_at' not in updated_cabinet:
        updated_cabinet['created_at'] = datetime.utcnow()
    
    print(f"DEBUG: Final cabinet data: {updated_cabinet}")
    
    try:
        return Cabinet(**updated_cabinet)
    except Exception as e:
        print(f"DEBUG: Error creating Cabinet object: {e}")
        print(f"DEBUG: Cabinet data that failed: {updated_cabinet}")
        raise HTTPException(status_code=500, detail=f"Error creating cabinet object: {str(e)}")

@api_router.delete("/cabinets/{cabinet_id}")
async def delete_cabinet(cabinet_id: str, current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    # Try to find by _id first (ObjectId), then by id (UUID string)
    try:
        cabinet = await db.cabinets.find_one({"_id": ObjectId(cabinet_id)})
        query = {"_id": ObjectId(cabinet_id)}
    except:
        cabinet = await db.cabinets.find_one({"id": cabinet_id})
        query = {"id": cabinet_id}
    
    if not cabinet:
        raise HTTPException(status_code=404, detail="Cabinet not found")
    
    # HARD DELETE - actually remove from database
    await db.cabinets.delete_one(query)
    return {"message": "Cabinet deleted successfully"}

@api_router.post("/slot-machines", response_model=SlotMachine)
async def create_slot_machine(slot_data: SlotMachineCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    # Verify cabinet and game mix exist
    cabinet = await db.cabinets.find_one({"id": slot_data.cabinet_id})
    if not cabinet:
        raise HTTPException(status_code=400, detail="Cabinet not found")
    
    game_mix = await db.game_mixes.find_one({"id": slot_data.game_mix_id})
    if not game_mix:
        raise HTTPException(status_code=400, detail="Game mix not found")
    
    slot_dict = slot_data.dict()
    slot_dict["created_by"] = current_user.id
    
    slot_obj = SlotMachine(**slot_dict)
    
    await db.slot_machines.insert_one(slot_obj.dict())
    return slot_obj

@api_router.get("/slot-machines", response_model=List[SlotMachine])
async def get_slot_machines(current_user: User = Depends(get_current_user)):
    query = await filter_by_user_access(current_user, {}, "slot_machines")
    slot_machines = await db.slot_machines.find(query).to_list(1000)
    # Convert ObjectIds to strings
    slot_machines = [convert_objectid_to_str(slot_machine) for slot_machine in slot_machines]
    return [SlotMachine(**slot_machine) for slot_machine in slot_machines]

@api_router.get("/slot-machines/{slot_machine_id}", response_model=SlotMachine)
async def get_slot_machine(slot_machine_id: str, current_user: User = Depends(get_current_user)):
    slot_machine = await db.slot_machines.find_one({"id": slot_machine_id})
    if not slot_machine:
        raise HTTPException(status_code=404, detail="Slot machine not found")
    return SlotMachine(**slot_machine)

@api_router.put("/slot-machines/{slot_machine_id}", response_model=SlotMachine)
async def update_slot_machine(slot_machine_id: str, slot_data: SlotMachineCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    slot_machine = await db.slot_machines.find_one({"id": slot_machine_id})
    if not slot_machine:
        raise HTTPException(status_code=404, detail="Slot machine not found")
    
    update_data = slot_data.dict()
    await db.slot_machines.update_one({"id": slot_machine_id}, {"$set": update_data})
    
    updated_slot_machine = await db.slot_machines.find_one({"id": slot_machine_id})
    return SlotMachine(**updated_slot_machine)

@api_router.delete("/slot-machines/{slot_machine_id}")
async def delete_slot_machine(slot_machine_id: str, current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    slot_machine = await db.slot_machines.find_one({"id": slot_machine_id})
    if not slot_machine:
        raise HTTPException(status_code=404, detail="Slot machine not found")
    
    # HARD DELETE - actually remove from database
    await db.slot_machines.delete_one({"id": slot_machine_id})
    return {"message": "Slot machine deleted successfully"}
# File upload helper functions
import base64
import mimetypes

def validate_file_upload(file_data: str, filename: str, max_size_mb: int = 50):
    """Validate file upload data"""
    try:
        # Validate base64 data
        if not file_data or not isinstance(file_data, str):
            raise HTTPException(status_code=400, detail="Invalid file data format")
        
        # Clean the base64 data
        clean_file_data = file_data.replace('\n', '').replace('\r', '').replace(' ', '')
        
        # Decode base64 to get actual file size
        try:
            file_bytes = base64.b64decode(clean_file_data)
            file_size = len(file_bytes)
        except Exception as e:
            raise HTTPException(status_code=400, detail=f"Invalid base64 data: {str(e)}")
        
        # Check file size (50MB limit)
        if file_size > max_size_mb * 1024 * 1024:
            raise HTTPException(status_code=400, detail=f"File size exceeds {max_size_mb}MB limit")
        
        # Get mime type
        mime_type, _ = mimetypes.guess_type(filename)
        if not mime_type:
            mime_type = "application/octet-stream"
        
        # Debug: Print filename and detected mime type
        print(f"DEBUG: Filename: {filename}")
        print(f"DEBUG: Detected MIME type: {mime_type}")
        
        # Validate file types (common business file types)
        allowed_types = [
            'image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/jpg',
            'application/pdf', 'application/msword', 
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'text/plain', 'text/csv'
        ]
        
        # Additional check for image files by extension
        if mime_type not in allowed_types:
            # Check if it's an image file by extension
            image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.tiff']
            file_extension = filename.lower()
            if any(file_extension.endswith(ext) for ext in image_extensions):
                print(f"DEBUG: File has image extension, allowing: {filename}")
                # For image files, use a generic image mime type
                mime_type = "image/jpeg"  # Default to jpeg for images
            else:
                print(f"DEBUG: File type not allowed: {mime_type} for {filename}")
                raise HTTPException(status_code=400, detail="File type not allowed")
        
        print(f"DEBUG: Final MIME type: {mime_type}")
        return file_size, mime_type
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid file data: {str(e)}")

# Attachment routes
@api_router.post("/attachments", response_model=Attachment)
async def upload_attachment(attachment_data: AttachmentCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    # Validate file
    file_size, mime_type = validate_file_upload(attachment_data.file_data, attachment_data.filename)
    
    # Verify entity exists based on entity_type
    entity_collections = {
        'users': db.users,
        'companies': db.companies,
        'locations': db.locations,
        'providers': db.providers,
        'cabinets': db.cabinets,
        'game_mixes': db.game_mixes,
        'slot_machines': db.slot_machines,
        'slots': db.slot_machines,  # Alias for slots
        'invoices': db.invoices,
        'onjn_reports': db.onjn_reports,
        'legal_documents': db.legal_documents,
        'metrology': db.metrology
    }
    
    if attachment_data.entity_type not in entity_collections:
        raise HTTPException(status_code=400, detail="Invalid entity type")
    
    collection = entity_collections[attachment_data.entity_type]
    
    print(f"Looking for {attachment_data.entity_type} with id: {attachment_data.entity_id}")
    print(f"Entity type: {attachment_data.entity_type}")
    
    # For cabinets, the frontend sends the _id as string, so we need to convert it back to ObjectId
    if attachment_data.entity_type == "cabinets":
        print("Processing cabinet entity")
        try:
            entity = await collection.find_one({"_id": ObjectId(attachment_data.entity_id)})
            print(f"Found cabinet by _id: {entity is not None}")
            if entity:
                print(f"Cabinet found: {entity.get('name', 'Unknown')}")
        except Exception as e:
            print(f"Error with _id lookup: {e}")
            entity = None
    else:
        # For other entities, try to find by _id first (ObjectId), then by id (UUID string)
        try:
            entity = await collection.find_one({"_id": ObjectId(attachment_data.entity_id)})
            print(f"Found by _id: {entity is not None}")
        except Exception as e:
            print(f"Error with _id lookup: {e}")
            entity = await collection.find_one({"id": attachment_data.entity_id})
            print(f"Found by id: {entity is not None}")
    
    if not entity:
        print(f"Entity not found for {attachment_data.entity_type} with id {attachment_data.entity_id}")
        raise HTTPException(status_code=404, detail=f"{attachment_data.entity_type.title()} not found")
    
    attachment_dict = attachment_data.dict()
    attachment_dict["file_size"] = file_size
    attachment_dict["mime_type"] = mime_type
    attachment_dict["uploaded_by"] = current_user.id
    attachment_obj = Attachment(**attachment_dict)
    
    await db.attachments.insert_one(attachment_obj.dict())
    return attachment_obj

@api_router.get("/attachments/{entity_type}/{entity_id}", response_model=List[dict])
async def get_entity_attachments(entity_type: str, entity_id: str, current_user: User = Depends(get_current_user)):
    # Verify user has access to the entity
    entity_collections = {
        'users': db.users,
        'companies': db.companies,
        'locations': db.locations,
        'providers': db.providers,
        'cabinets': db.cabinets,
        'game_mixes': db.game_mixes,
        'slot_machines': db.slot_machines,
        'slots': db.slot_machines,  # Alias for slots
        'invoices': db.invoices,
        'onjn_reports': db.onjn_reports,
        'legal_documents': db.legal_documents,
        'metrology': db.metrology
    }
    
    if entity_type not in entity_collections:
        raise HTTPException(status_code=400, detail="Invalid entity type")
    
    # Check access based on entity type
    if entity_type == "companies":
        accessible_companies = await get_user_accessible_companies(current_user)
        if current_user.role != UserRole.ADMIN and entity_id not in accessible_companies:
            raise HTTPException(status_code=403, detail="Access denied to this entity")
    elif entity_type == "locations":
        accessible_locations = await get_user_accessible_locations(current_user)
        if current_user.role != UserRole.ADMIN and entity_id not in accessible_locations:
            raise HTTPException(status_code=403, detail="Access denied to this entity")
    elif entity_type in ["cabinets", "slot_machines"]:
        # Check if entity belongs to accessible location
        collection = entity_collections[entity_type]
        entity = await collection.find_one({"id": entity_id})
        if entity:
            accessible_locations = await get_user_accessible_locations(current_user)
            if current_user.role != UserRole.ADMIN and entity.get("location_id") not in accessible_locations:
                raise HTTPException(status_code=403, detail="Access denied to this entity")
    
    attachments = await db.attachments.find({
        "entity_type": entity_type,
        "entity_id": entity_id
    }).to_list(1000)
    
    # Convert ObjectIds to strings and add creator information
    result = []
    for attachment in attachments:
        attachment_data = convert_objectid_to_str(attachment)
        
        # Get creator information
        creator_info = {"first_name": "", "last_name": ""}
        if "uploaded_by" in attachment_data:
            creator = await db.users.find_one({"id": attachment_data["uploaded_by"]})
            if creator:
                creator_info = {
                    "first_name": creator.get("first_name", ""),
                    "last_name": creator.get("last_name", "")
                }
        
        # Add creator info to attachment data
        attachment_data["creator_name"] = f"{creator_info['first_name']} {creator_info['last_name']}".strip()
        
        result.append(attachment_data)
    
    return result

@api_router.get("/attachments/{attachment_id}")
async def download_attachment(attachment_id: str, current_user: User = Depends(get_current_user)):
    attachment = await db.attachments.find_one({"id": attachment_id})
    if not attachment:
        raise HTTPException(status_code=404, detail="Attachment not found")
    
    return {
        "filename": attachment["original_filename"],
        "mime_type": attachment["mime_type"],
        "file_data": attachment["file_data"]
    }

@api_router.delete("/attachments/{attachment_id}")
async def delete_attachment(attachment_id: str, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    attachment = await db.attachments.find_one({"id": attachment_id})
    if not attachment:
        raise HTTPException(status_code=404, detail="Attachment not found")
    
    await db.attachments.delete_one({"id": attachment_id})
    return {"message": "Attachment deleted successfully"}

# Invoice management routes
@api_router.post("/invoices", response_model=Invoice)
async def create_invoice(invoice_data: InvoiceCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    # Verify company and location exist
    company = await db.companies.find_one({"id": invoice_data.company_id})
    if not company:
        raise HTTPException(status_code=400, detail="Company not found")
    
    location = await db.locations.find_one({"id": invoice_data.location_id})
    if not location:
        raise HTTPException(status_code=400, detail="Location not found")
    
    # Check if invoice number already exists
    existing_invoice = await db.invoices.find_one({"invoice_number": invoice_data.invoice_number})
    if existing_invoice:
        raise HTTPException(status_code=400, detail="Invoice number already exists")
    
    # Verify serial numbers exist in slot machines and update them with invoice number
    serial_numbers = invoice_data.serial_numbers.strip().split()
    if serial_numbers:
        for serial_number in serial_numbers:
            if serial_number:  # Skip empty strings
                slot_machine = await db.slot_machines.find_one({"serial_number": serial_number})
                if not slot_machine:
                    raise HTTPException(status_code=400, detail=f"Serial number {serial_number} not found in slot machines")
    
    invoice_dict = invoice_data.dict()
    invoice_dict["created_by"] = current_user.id
    invoice_obj = Invoice(**invoice_dict)
    
    # Create the invoice
    await db.invoices.insert_one(invoice_obj.dict())
    
    # Update slot machines with invoice number
    if serial_numbers:
        for serial_number in serial_numbers:
            if serial_number:
                await db.slot_machines.update_one(
                    {"serial_number": serial_number},
                    {"$set": {"invoice_number": invoice_data.invoice_number}}
                )
    
    return invoice_obj

@api_router.get("/invoices", response_model=List[Invoice])
async def get_invoices(current_user: User = Depends(get_current_user)):
    query = await filter_by_user_access(current_user, {}, "invoices")
    invoices = await db.invoices.find(query).to_list(1000)
    # Convert ObjectIds to strings
    invoices = [convert_objectid_to_str(invoice) for invoice in invoices]
    return [Invoice(**invoice) for invoice in invoices]

@api_router.get("/invoices/{invoice_id}", response_model=Invoice)
async def get_invoice(invoice_id: str, current_user: User = Depends(get_current_user)):
    invoice = await db.invoices.find_one({"id": invoice_id})
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")
    return Invoice(**invoice)

@api_router.put("/invoices/{invoice_id}", response_model=Invoice)
async def update_invoice(invoice_id: str, invoice_data: InvoiceCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    invoice = await db.invoices.find_one({"id": invoice_id})
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")
    
    update_data = invoice_data.dict()
    await db.invoices.update_one({"id": invoice_id}, {"$set": update_data})
    
    updated_invoice = await db.invoices.find_one({"id": invoice_id})
    return Invoice(**updated_invoice)

@api_router.delete("/invoices/{invoice_id}")
async def delete_invoice(invoice_id: str, current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    await db.invoices.delete_one({"id": invoice_id})
    return {"message": "Invoice deleted successfully"}

# ONJN Report routes
@api_router.post("/onjn-reports", response_model=ONJNReport)
async def create_onjn_report(report_data: ONJNReportCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    # Check if report number already exists
    existing_report = await db.onjn_reports.find_one({"report_number": report_data.report_number})
    if existing_report:
        raise HTTPException(status_code=400, detail="Report number already exists")
    
    report_dict = report_data.dict()
    report_dict["created_by"] = current_user.id
    report_obj = ONJNReport(**report_dict)
    
    await db.onjn_reports.insert_one(report_obj.dict())
    return report_obj

@api_router.get("/onjn-reports", response_model=List[ONJNReport])
async def get_onjn_reports(current_user: User = Depends(get_current_user)):
    query = await filter_by_user_access(current_user, {}, "onjn_reports")
    reports = await db.onjn_reports.find(query).to_list(1000)
    # Convert ObjectIds to strings
    reports = [convert_objectid_to_str(report) for report in reports]
    return [ONJNReport(**report) for report in reports]

@api_router.get("/onjn-reports/{report_id}", response_model=ONJNReport)
async def get_onjn_report(report_id: str, current_user: User = Depends(get_current_user)):
    report = await db.onjn_reports.find_one({"id": report_id})
    if not report:
        raise HTTPException(status_code=404, detail="ONJN report not found")
    return ONJNReport(**report)

@api_router.put("/onjn-reports/{report_id}", response_model=ONJNReport)
async def update_onjn_report(report_id: str, report_data: ONJNReportCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    report = await db.onjn_reports.find_one({"id": report_id})
    if not report:
        raise HTTPException(status_code=404, detail="ONJN report not found")
    
    update_data = report_data.dict()
    await db.onjn_reports.update_one({"id": report_id}, {"$set": update_data})
    
    updated_report = await db.onjn_reports.find_one({"id": report_id})
    return ONJNReport(**updated_report)

@api_router.delete("/onjn-reports/{report_id}")
async def delete_onjn_report(report_id: str, current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    await db.onjn_reports.delete_one({"id": report_id})
    return {"message": "ONJN report deleted successfully"}

# Legal Document routes
@api_router.post("/legal-documents", response_model=LegalDocument)
async def create_legal_document(document_data: LegalDocumentCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    document_dict = document_data.dict()
    document_dict["created_by"] = current_user.id
    document_obj = LegalDocument(**document_dict)
    
    await db.legal_documents.insert_one(document_obj.dict())
    return document_obj

@api_router.get("/legal-documents", response_model=List[LegalDocument])
async def get_legal_documents(current_user: User = Depends(get_current_user)):
    query = await filter_by_user_access(current_user, {}, "legal_documents")
    documents = await db.legal_documents.find(query).to_list(1000)
    # Convert ObjectIds to strings
    documents = [convert_objectid_to_str(document) for document in documents]
    return [LegalDocument(**document) for document in documents]

@api_router.get("/legal-documents/{document_id}", response_model=LegalDocument)
async def get_legal_document(document_id: str, current_user: User = Depends(get_current_user)):
    document = await db.legal_documents.find_one({"id": document_id})
    if not document:
        raise HTTPException(status_code=404, detail="Legal document not found")
    return LegalDocument(**document)

@api_router.put("/legal-documents/{document_id}", response_model=LegalDocument)
async def update_legal_document(document_id: str, document_data: LegalDocumentCreate, current_user: User = Depends(get_current_user)):
    if current_user.role not in [UserRole.ADMIN, UserRole.MANAGER]:
        raise HTTPException(status_code=403, detail="Insufficient permissions")
    
    document = await db.legal_documents.find_one({"id": document_id})
    if not document:
        raise HTTPException(status_code=404, detail="Legal document not found")
    
    update_data = document_data.dict()
    await db.legal_documents.update_one({"id": document_id}, {"$set": update_data})
    
    updated_document = await db.legal_documents.find_one({"id": document_id})
    return LegalDocument(**updated_document)

@api_router.delete("/legal-documents/{document_id}")
async def delete_legal_document(document_id: str, current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    await db.legal_documents.delete_one({"id": document_id})
    return {"message": "Legal document deleted successfully"}

# Metrology endpoints
@api_router.post("/metrology", response_model=Metrology)
async def create_metrology(metrology_data: MetrologyCreate, current_user: User = Depends(get_current_user)):
    # Calculate next calibration date
    next_calibration_date = metrology_data.issue_date + timedelta(days=metrology_data.calibration_interval * 30)
    
    metrology = Metrology(
        **metrology_data.dict(),
        next_calibration_date=next_calibration_date,
        created_by=current_user.id
    )
    
    await db.metrology.insert_one(metrology.dict())
    return metrology

@api_router.get("/metrology", response_model=List[dict])
async def get_metrology(current_user: User = Depends(get_current_user)):
    cursor = db.metrology.find({})
    metrology_list = await cursor.to_list(length=None)
    
    result = []
    for item in metrology_list:
        # Convert ObjectId to string
        metrology_data = convert_objectid_to_str(item)
        
        # Get creator information
        creator_info = {"first_name": "", "last_name": ""}
        if "created_by" in metrology_data:
            creator = await db.users.find_one({"id": metrology_data["created_by"]})
            if creator:
                creator_info = {
                    "first_name": creator.get("first_name", ""),
                    "last_name": creator.get("last_name", "")
                }
        
        # Add creator info to metrology data
        metrology_data["creator_name"] = f"{creator_info['first_name']} {creator_info['last_name']}".strip()
        
        result.append(metrology_data)
    
    return result

@api_router.get("/metrology/{metrology_id}", response_model=dict)
async def get_metrology_record(metrology_id: str, current_user: User = Depends(get_current_user)):
    metrology = await db.metrology.find_one({"id": metrology_id})
    if not metrology:
        raise HTTPException(status_code=404, detail="Metrology record not found")
    
    # Convert ObjectId to string
    metrology_data = convert_objectid_to_str(metrology)
    
    # Get creator information
    creator_info = {"first_name": "", "last_name": ""}
    if "created_by" in metrology_data:
        creator = await db.users.find_one({"id": metrology_data["created_by"]})
        if creator:
            creator_info = {
                "first_name": creator.get("first_name", ""),
                "last_name": creator.get("last_name", "")
            }
    
    # Add creator info to metrology data
    metrology_data["creator_name"] = f"{creator_info['first_name']} {creator_info['last_name']}".strip()
    
    return metrology_data

@api_router.put("/metrology/{metrology_id}", response_model=Metrology)
async def update_metrology(metrology_id: str, metrology_data: MetrologyCreate, current_user: User = Depends(get_current_user)):
    # Check if metrology record exists
    existing_metrology = await db.metrology.find_one({"id": metrology_id})
    if not existing_metrology:
        raise HTTPException(status_code=404, detail="Metrology record not found")
    
    # Calculate next calibration date
    next_calibration_date = metrology_data.issue_date + timedelta(days=metrology_data.calibration_interval * 30)
    
    update_data = metrology_data.dict()
    update_data["next_calibration_date"] = next_calibration_date
    
    await db.metrology.update_one({"id": metrology_id}, {"$set": update_data})
    
    updated_metrology = await db.metrology.find_one({"id": metrology_id})
    return Metrology(**convert_objectid_to_str(updated_metrology))

@api_router.delete("/metrology/{metrology_id}")
async def delete_metrology(metrology_id: str, current_user: User = Depends(get_current_user)):
    # Check if metrology record exists
    metrology = await db.metrology.find_one({"id": metrology_id})
    if not metrology:
        raise HTTPException(status_code=404, detail="Metrology record not found")
    
    # Delete metrology record
    await db.metrology.delete_one({"id": metrology_id})
    return {"message": "Metrology record deleted successfully"}

# Jackpot endpoints
@api_router.post("/jackpots", response_model=Jackpot)
async def create_jackpot(jackpot_data: JackpotCreate, current_user: User = Depends(get_current_user)):
    jackpot = Jackpot(
        **jackpot_data.dict(),
        last_reset_date=datetime.utcnow(),
        created_by=current_user.id
    )
    
    await db.jackpots.insert_one(jackpot.dict())
    return jackpot

@api_router.get("/jackpots", response_model=List[Jackpot])
async def get_jackpots(current_user: User = Depends(get_current_user)):
    cursor = db.jackpots.find({})
    jackpot_list = await cursor.to_list(length=None)
    return [Jackpot(**convert_objectid_to_str(item)) for item in jackpot_list]

@api_router.get("/jackpots/{jackpot_id}", response_model=Jackpot)
async def get_jackpot(jackpot_id: str, current_user: User = Depends(get_current_user)):
    jackpot = await db.jackpots.find_one({"id": jackpot_id})
    if not jackpot:
        raise HTTPException(status_code=404, detail="Jackpot record not found")
    
    return Jackpot(**convert_objectid_to_str(jackpot))

@api_router.put("/jackpots/{jackpot_id}", response_model=Jackpot)
async def update_jackpot(jackpot_id: str, jackpot_data: JackpotCreate, current_user: User = Depends(get_current_user)):
    # Check if jackpot record exists
    existing_jackpot = await db.jackpots.find_one({"id": jackpot_id})
    if not existing_jackpot:
        raise HTTPException(status_code=404, detail="Jackpot record not found")
    
    await db.jackpots.update_one({"id": jackpot_id}, {"$set": jackpot_data.dict()})
    
    updated_jackpot = await db.jackpots.find_one({"id": jackpot_id})
    return Jackpot(**convert_objectid_to_str(updated_jackpot))

@api_router.delete("/jackpots/{jackpot_id}")
async def delete_jackpot(jackpot_id: str, current_user: User = Depends(get_current_user)):
    # Check if jackpot record exists
    jackpot = await db.jackpots.find_one({"id": jackpot_id})
    if not jackpot:
        raise HTTPException(status_code=404, detail="Jackpot record not found")
    
    # Delete jackpot record
    await db.jackpots.delete_one({"id": jackpot_id})
    return {"message": "Jackpot record deleted successfully"}

@api_router.post("/users", response_model=dict)
async def create_user(user_data: UserCreate, current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    # Check if user already exists
    existing_user = await db.users.find_one({"username": user_data.username})
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")
    
    # Create user document
    user_dict = user_data.model_dump()
    user_dict["password_hash"] = hash_password(user_data.password)
    user_dict.pop("password", None)  # Remove plain password
    user_dict["created_by"] = current_user.id
    
    # Create user without permissions validation
    user_doc = {
        "id": user_dict.get("id", str(uuid.uuid4())),
        "username": user_dict["username"],
        "email": user_dict["email"],
        "phone": user_dict.get("phone"),
        "password_hash": user_dict["password_hash"],
        "first_name": user_dict.get("first_name", ""),
        "last_name": user_dict.get("last_name", ""),
        "role": user_dict.get("role", "operator"),
        "assigned_locations": user_dict.get("assigned_locations", []),
        "permissions": {
            "modules": {
                "dashboard": True,
                "companies": False,
                "locations": False,
                "providers": False,
                "cabinets": False,
                "game_mixes": False,
                "slot_machines": False,
                "invoices": False,
                "onjn_reports": False,
                "legal_documents": False,
                "metrology": False,
                "jackpots": False,
                "users": False
            },
            "actions": {
                "companies": {"create": False, "read": False, "update": False, "delete": False},
                "locations": {"create": False, "read": False, "update": False, "delete": False},
                "providers": {"create": False, "read": False, "update": False, "delete": False},
                "cabinets": {"create": False, "read": False, "update": False, "delete": False},
                "game_mixes": {"create": False, "read": False, "update": False, "delete": False},
                "slot_machines": {"create": False, "read": False, "update": False, "delete": False},
                "invoices": {"create": False, "read": False, "update": False, "delete": False},
                "onjn_reports": {"create": False, "read": False, "update": False, "delete": False},
                "legal_documents": {"create": False, "read": False, "update": False, "delete": False},
                "metrology": {"create": False, "read": False, "update": False, "delete": False},
                "jackpots": {"create": False, "read": False, "update": False, "delete": False},
                "users": {"create": False, "read": False, "update": False, "delete": False}
            },
            "accessible_companies": [],
            "accessible_locations": []
        },
        "created_at": datetime.utcnow(),
        "is_active": True,
        "created_by": user_dict["created_by"]
    }
    
    await db.users.insert_one(user_doc)
    
    # Return user without password hash
    user_response = user_doc.copy()
    user_response.pop("password_hash", None)
    return user_response
    


@api_router.get("/users", response_model=List[dict])
async def get_users(current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    users = await db.users.find({}).to_list(1000)
    # Convert ObjectIds to strings and remove password hashes
    users = [convert_objectid_to_str(user) for user in users]
    for user in users:
        user.pop('password_hash', None)
    return users

@api_router.get("/users/{user_id}", response_model=dict)
async def get_user(user_id: str, current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN and current_user.id != user_id:
        raise HTTPException(status_code=403, detail="Access denied")
    
    user = await db.users.find_one({"id": user_id})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # Convert ObjectId to string and remove password hash
    user = convert_objectid_to_str(user)
    user.pop('password_hash', None)
    return user

@api_router.put("/users/{user_id}", response_model=dict)
async def update_user(user_id: str, user_data: UserUpdate, current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    user = await db.users.find_one({"id": user_id})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    update_data = {}
    if user_data.username is not None:
        update_data["username"] = user_data.username
    if user_data.email is not None:
        update_data["email"] = user_data.email
    if user_data.phone is not None:
        update_data["phone"] = user_data.phone
    if user_data.first_name is not None:
        update_data["first_name"] = user_data.first_name
    if user_data.last_name is not None:
        update_data["last_name"] = user_data.last_name
    if user_data.role is not None:
        update_data["role"] = user_data.role
    if user_data.assigned_locations is not None:
        update_data["assigned_locations"] = user_data.assigned_locations
    if user_data.permissions is not None:
        update_data["permissions"] = user_data.permissions.dict()
    if user_data.is_active is not None:
        update_data["is_active"] = user_data.is_active
    if user_data.password is not None:
        update_data["password_hash"] = hash_password(user_data.password)
    
    await db.users.update_one({"id": user_id}, {"$set": update_data})
    
    updated_user = await db.users.find_one({"id": user_id})
    # Convert ObjectId to string and remove password hash
    updated_user = convert_objectid_to_str(updated_user)
    updated_user.pop('password_hash', None)
    return updated_user

# Add endpoint to get all companies and locations for user form
@api_router.get("/admin/companies-locations")
async def get_companies_locations_for_admin(current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    companies = await db.companies.find({}).to_list(1000)
    locations = await db.locations.find({}).to_list(1000)
    
    return {
        "companies": [{"id": comp["id"], "name": comp["name"]} for comp in companies],
        "locations": [{"id": loc["id"], "name": loc["name"], "company_id": loc.get("company_id")} for loc in locations]
    }

@api_router.delete("/users/{user_id}")
async def delete_user(user_id: str, current_user: User = Depends(get_current_user)):
    if current_user.role != UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Admin access required")
    
    if user_id == current_user.id:
        raise HTTPException(status_code=400, detail="Cannot delete your own account")
    
    user = await db.users.find_one({"id": user_id})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # HARD DELETE - actually remove from database
    await db.users.delete_one({"id": user_id})
    return {"message": "User deleted successfully"}

@api_router.get("/dashboard/stats", response_model=DashboardStats)
async def get_dashboard_stats(current_user: User = Depends(get_current_user)):
    # Get user accessible data for statistics
    accessible_companies = await get_user_accessible_companies(current_user)
    accessible_locations = await get_user_accessible_locations(current_user)
    
    # Get counts based on user access
    total_companies = len(accessible_companies)
    total_locations = len(accessible_locations)
    
    # Count active entities within user's access
    active_companies_query = {"id": {"$in": accessible_companies}, "status": "active"}
    active_locations_query = {"id": {"$in": accessible_locations}, "status": "active"}
    
    active_companies = await db.companies.count_documents(active_companies_query)
    active_locations = await db.locations.count_documents(active_locations_query)
    
    # Get equipment counts based on accessible locations
    cabinets_query = {"location_id": {"$in": accessible_locations}}
    
    # For slot machines, we need to find cabinets in accessible locations first
    accessible_cabinets = await db.cabinets.find(cabinets_query).to_list(1000)
    accessible_cabinet_ids = [cab["id"] for cab in accessible_cabinets]
    slots_query = {"cabinet_id": {"$in": accessible_cabinet_ids}} if accessible_cabinet_ids else {"cabinet_id": {"$in": []}}
    
    # For admin, get all providers and game mixes; for others, get only those used in accessible locations
    if current_user.role == UserRole.ADMIN:
        total_providers = await db.providers.count_documents({})
        total_game_mixes = await db.game_mixes.count_documents({})
    else:
        # Get providers used in accessible cabinets
        cabinets = await db.cabinets.find(cabinets_query).to_list(1000)
        provider_ids = list(set([cab["provider_id"] for cab in cabinets if "provider_id" in cab]))
        total_providers = len(provider_ids)
        
        # Get game mixes used in accessible slot machines
        slot_machines = await db.slot_machines.find({}).to_list(1000)
        accessible_slots = []
        for slot in slot_machines:
            cabinet = await db.cabinets.find_one({"id": slot["cabinet_id"]})
            if cabinet and cabinet["location_id"] in accessible_locations:
                accessible_slots.append(slot)
        game_mix_ids = list(set([slot["game_mix_id"] for slot in accessible_slots if "game_mix_id" in slot]))
        total_game_mixes = len(game_mix_ids)
    
    total_cabinets = await db.cabinets.count_documents(cabinets_query)
    total_slot_machines = await db.slot_machines.count_documents(slots_query)
    active_equipment = await db.cabinets.count_documents({**cabinets_query, "status": "active"}) + \
                     await db.slot_machines.count_documents({**slots_query, "status": "active"})
    
    # Get financial and legal document counts
    invoices_query = await filter_by_user_access(current_user, {}, "invoices")
    onjn_query = await filter_by_user_access(current_user, {}, "onjn_reports")
    legal_query = await filter_by_user_access(current_user, {}, "legal_documents")
    
    total_invoices = await db.invoices.count_documents(invoices_query)
    total_onjn_reports = await db.onjn_reports.count_documents(onjn_query)
    total_legal_documents = await db.legal_documents.count_documents(legal_query)
    
    # Get metrology and jackpot counts
    total_metrology = await db.metrology.count_documents({})
    total_jackpots = await db.jackpots.count_documents({})
    
    # Get user count (only for admin)
    total_users = await db.users.count_documents({}) if current_user.role == UserRole.ADMIN else 0
    
    # Get recent activities based on user access
    recent_companies = await db.companies.find({"id": {"$in": accessible_companies}}).sort("created_at", -1).limit(3).to_list(3)
    recent_locations = await db.locations.find({"id": {"$in": accessible_locations}}).sort("created_at", -1).limit(3).to_list(3)
    
    # Get recent providers and cabinets based on access
    recent_providers = []
    recent_cabinets = []
    
    if current_user.role == UserRole.ADMIN:
        recent_providers = await db.providers.find({}).sort("created_at", -1).limit(2).to_list(2)
        recent_cabinets = await db.cabinets.find({}).sort("created_at", -1).limit(2).to_list(2)
    else:
        # Get providers used in accessible locations
        cabinets = await db.cabinets.find({"location_id": {"$in": accessible_locations}}).to_list(1000)
        provider_ids = list(set([cab["provider_id"] for cab in cabinets if "provider_id" in cab]))
        if provider_ids:
            recent_providers = await db.providers.find({"id": {"$in": provider_ids}}).sort("created_at", -1).limit(2).to_list(2)
        
        recent_cabinets = await db.cabinets.find({"location_id": {"$in": accessible_locations}}).sort("created_at", -1).limit(2).to_list(2)
    
    recent_activities = []
    for company in recent_companies:
        recent_activities.append({
            "type": "company",
            "action": "created",
            "name": company["name"],
            "date": company["created_at"].isoformat() if isinstance(company["created_at"], datetime) else company["created_at"]
        })
    
    for location in recent_locations:
        recent_activities.append({
            "type": "location",
            "action": "created",
            "name": location["name"],
            "date": location["created_at"].isoformat() if isinstance(location["created_at"], datetime) else location["created_at"]
        })
    
    for provider in recent_providers:
        recent_activities.append({
            "type": "provider",
            "action": "created",
            "name": provider["name"],
            "date": provider["created_at"].isoformat() if isinstance(provider["created_at"], datetime) else provider["created_at"]
        })
    
    for cabinet in recent_cabinets:
        recent_activities.append({
            "type": "cabinet",
            "action": "created",
            "name": f"{cabinet['name']} {cabinet['model']}",
            "date": cabinet["created_at"].isoformat() if isinstance(cabinet["created_at"], datetime) else cabinet["created_at"]
        })
    
    # Sort by date
    recent_activities.sort(key=lambda x: x["date"], reverse=True)
    recent_activities = recent_activities[:10]
    
    return DashboardStats(
        total_companies=total_companies,
        total_locations=total_locations,
        active_companies=active_companies,
        active_locations=active_locations,
        total_providers=total_providers,
        total_cabinets=total_cabinets,
        total_slot_machines=total_slot_machines,
        active_equipment=active_equipment,
        total_invoices=total_invoices,
        total_onjn_reports=total_onjn_reports,
        total_legal_documents=total_legal_documents,
        total_metrology=total_metrology,
        total_jackpots=total_jackpots,
        total_users=total_users,
        recent_activities=recent_activities
    )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["http://localhost:3000", "http://localhost:4002", "http://127.0.0.1:3000", "http://127.0.0.1:4002"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_db_client():
    # Check if admin user exists
    admin_user = await db.users.find_one({"username": "admin"})
    if admin_user:
        logger.info("Admin user already exists")
    else:
        logger.info("No admin user found - please create one manually")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8002)