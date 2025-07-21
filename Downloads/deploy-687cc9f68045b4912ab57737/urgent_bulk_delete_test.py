#!/usr/bin/env python3
"""
URGENT: Bulk Delete Functionality Test
Tests the bulk delete functionality that the user is frustrated about
"""

import requests
import json
import sys
from datetime import datetime

# Configuration
BACKEND_URL = "https://96ffa7d7-b46c-4a85-a621-1f240423f6c2.preview.emergentagent.com/api"
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "password"

class UrgentBulkDeleteTester:
    def __init__(self):
        self.session = requests.Session()
        self.auth_token = None
        self.test_results = []
        self.created_company_ids = []
        
    def log_test(self, test_name, success, message="", response_data=None):
        """Log test results"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}")
        if message:
            print(f"   {message}")
        if response_data and not success:
            print(f"   Response: {response_data}")
        print()
        
        self.test_results.append({
            "test": test_name,
            "success": success,
            "message": message,
            "timestamp": datetime.now().isoformat()
        })
    
    def authenticate(self):
        """Authenticate as admin user"""
        print("=== AUTHENTICATING AS ADMIN ===")
        
        try:
            login_data = {
                "username": ADMIN_USERNAME,
                "password": ADMIN_PASSWORD
            }
            response = self.session.post(f"{BACKEND_URL}/auth/login", json=login_data)
            
            if response.status_code == 200:
                data = response.json()
                if "access_token" in data and "user" in data:
                    self.auth_token = data["access_token"]
                    self.session.headers.update({"Authorization": f"Bearer {self.auth_token}"})
                    self.log_test("Admin Authentication", True, f"Successfully logged in as {data['user']['username']} ({data['user']['role']})")
                    return True
                else:
                    self.log_test("Admin Authentication", False, "Missing access_token or user in response", data)
                    return False
            else:
                self.log_test("Admin Authentication", False, f"HTTP {response.status_code}", response.text)
                return False
        except Exception as e:
            self.log_test("Admin Authentication", False, f"Exception: {str(e)}")
            return False
    
    def create_test_companies(self):
        """Create 2 test companies for bulk delete testing"""
        print("=== CREATING TEST COMPANIES FOR BULK DELETE ===")
        
        if not self.auth_token:
            self.log_test("Create Test Companies", False, "No auth token available")
            return False
        
        companies_data = [
            {
                "name": f"Test Company 1 - Bulk Delete {datetime.now().strftime('%Y%m%d%H%M%S')}",
                "registration_number": f"J40/TEST1/{datetime.now().strftime('%Y')}",
                "tax_id": f"RO{datetime.now().strftime('%Y%m%d%H%M')}1",
                "address": "Test Address 1, Bucharest",
                "phone": "+40 21 111 1111",
                "email": "test1@bulkdelete.ro",
                "website": "https://test1.bulkdelete.ro",
                "contact_person": "Test Person 1"
            },
            {
                "name": f"Test Company 2 - Bulk Delete {datetime.now().strftime('%Y%m%d%H%M%S')}",
                "registration_number": f"J40/TEST2/{datetime.now().strftime('%Y')}",
                "tax_id": f"RO{datetime.now().strftime('%Y%m%d%H%M')}2",
                "address": "Test Address 2, Bucharest",
                "phone": "+40 21 222 2222",
                "email": "test2@bulkdelete.ro",
                "website": "https://test2.bulkdelete.ro",
                "contact_person": "Test Person 2"
            }
        ]
        
        for i, company_data in enumerate(companies_data, 1):
            try:
                response = self.session.post(f"{BACKEND_URL}/companies", json=company_data)
                
                if response.status_code == 200:
                    data = response.json()
                    if "id" in data and "name" in data:
                        self.created_company_ids.append(data["id"])
                        self.log_test(f"Create Test Company {i}", True, f"Created: {data['name']} (ID: {data['id']})")
                    else:
                        self.log_test(f"Create Test Company {i}", False, "Missing id or name in response", data)
                        return False
                else:
                    self.log_test(f"Create Test Company {i}", False, f"HTTP {response.status_code}", response.text)
                    return False
            except Exception as e:
                self.log_test(f"Create Test Company {i}", False, f"Exception: {str(e)}")
                return False
        
        return len(self.created_company_ids) == 2
    
    def verify_companies_active(self):
        """Verify that the test companies are initially active"""
        print("=== VERIFYING COMPANIES ARE INITIALLY ACTIVE ===")
        
        if not self.created_company_ids:
            self.log_test("Verify Companies Active", False, "No test companies created")
            return False
        
        try:
            response = self.session.get(f"{BACKEND_URL}/companies")
            
            if response.status_code == 200:
                companies = response.json()
                if isinstance(companies, list):
                    # Find our test companies
                    test_companies = [comp for comp in companies if comp["id"] in self.created_company_ids]
                    
                    if len(test_companies) == 2:
                        active_count = sum(1 for comp in test_companies if comp.get("status", "active") == "active")
                        if active_count == 2:
                            self.log_test("Verify Companies Active", True, f"Both test companies are active: {[comp['name'] for comp in test_companies]}")
                            return True
                        else:
                            self.log_test("Verify Companies Active", False, f"Only {active_count}/2 companies are active")
                            return False
                    else:
                        self.log_test("Verify Companies Active", False, f"Found {len(test_companies)}/2 test companies in list")
                        return False
                else:
                    self.log_test("Verify Companies Active", False, "Response is not a list", companies)
                    return False
            else:
                self.log_test("Verify Companies Active", False, f"HTTP {response.status_code}", response.text)
                return False
        except Exception as e:
            self.log_test("Verify Companies Active", False, f"Exception: {str(e)}")
            return False
    
    def test_bulk_delete_companies(self):
        """Test the bulk delete functionality with 2 company IDs"""
        print("=== TESTING BULK DELETE FUNCTIONALITY ===")
        
        if not self.created_company_ids or len(self.created_company_ids) != 2:
            self.log_test("Bulk Delete Companies", False, "Need exactly 2 test companies for bulk delete test")
            return False
        
        try:
            # Test bulk delete with the 2 company IDs
            response = self.session.post(f"{BACKEND_URL}/companies/bulk-delete", json=self.created_company_ids)
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data and "Successfully deleted" in data["message"]:
                    # Extract the count from the message
                    if "2 companies" in data["message"]:
                        self.log_test("POST /companies/bulk-delete", True, f"Bulk delete successful: {data['message']}")
                        return True
                    else:
                        self.log_test("POST /companies/bulk-delete", False, f"Expected 2 companies deleted, got: {data['message']}")
                        return False
                else:
                    self.log_test("POST /companies/bulk-delete", False, "Missing or invalid success message", data)
                    return False
            else:
                self.log_test("POST /companies/bulk-delete", False, f"HTTP {response.status_code}", response.text)
                return False
        except Exception as e:
            self.log_test("POST /companies/bulk-delete", False, f"Exception: {str(e)}")
            return False
    
    def verify_companies_inactive(self):
        """Verify that the companies are marked as inactive after bulk delete"""
        print("=== VERIFYING COMPANIES ARE MARKED AS INACTIVE ===")
        
        if not self.created_company_ids:
            self.log_test("Verify Companies Inactive", False, "No test companies to verify")
            return False
        
        try:
            response = self.session.get(f"{BACKEND_URL}/companies")
            
            if response.status_code == 200:
                companies = response.json()
                if isinstance(companies, list):
                    # Find our test companies
                    test_companies = [comp for comp in companies if comp["id"] in self.created_company_ids]
                    
                    if len(test_companies) == 2:
                        inactive_count = sum(1 for comp in test_companies if comp.get("status") == "inactive")
                        if inactive_count == 2:
                            self.log_test("Verify Companies Inactive", True, f"Both test companies are now inactive (soft deleted): {[comp['name'] for comp in test_companies]}")
                            return True
                        else:
                            active_companies = [comp['name'] for comp in test_companies if comp.get("status", "active") == "active"]
                            self.log_test("Verify Companies Inactive", False, f"Only {inactive_count}/2 companies are inactive. Still active: {active_companies}")
                            return False
                    else:
                        self.log_test("Verify Companies Inactive", False, f"Found {len(test_companies)}/2 test companies in list")
                        return False
                else:
                    self.log_test("Verify Companies Inactive", False, "Response is not a list", companies)
                    return False
            else:
                self.log_test("Verify Companies Inactive", False, f"HTTP {response.status_code}", response.text)
                return False
        except Exception as e:
            self.log_test("Verify Companies Inactive", False, f"Exception: {str(e)}")
            return False
    
    def test_bulk_delete_error_handling(self):
        """Test bulk delete error handling with invalid IDs"""
        print("=== TESTING BULK DELETE ERROR HANDLING ===")
        
        # Test 1: Empty array
        try:
            response = self.session.post(f"{BACKEND_URL}/companies/bulk-delete", json=[])
            
            if response.status_code == 200:
                data = response.json()
                if "0 companies" in data.get("message", ""):
                    self.log_test("Bulk Delete Empty Array", True, "Correctly handled empty array")
                else:
                    self.log_test("Bulk Delete Empty Array", False, f"Unexpected response: {data}")
            else:
                self.log_test("Bulk Delete Empty Array", False, f"HTTP {response.status_code}", response.text)
        except Exception as e:
            self.log_test("Bulk Delete Empty Array", False, f"Exception: {str(e)}")
        
        # Test 2: Invalid company IDs
        try:
            invalid_ids = ["invalid-id-1", "invalid-id-2"]
            response = self.session.post(f"{BACKEND_URL}/companies/bulk-delete", json=invalid_ids)
            
            if response.status_code == 404:
                self.log_test("Bulk Delete Invalid IDs", True, "Correctly rejected invalid company IDs with 404")
            else:
                self.log_test("Bulk Delete Invalid IDs", False, f"Expected 404, got {response.status_code}")
        except Exception as e:
            self.log_test("Bulk Delete Invalid IDs", False, f"Exception: {str(e)}")
    
    def run_urgent_test(self):
        """Run the urgent bulk delete test"""
        print("🚨 URGENT BULK DELETE FUNCTIONALITY TEST 🚨")
        print("=" * 60)
        
        # Step 1: Authenticate
        if not self.authenticate():
            print("❌ CRITICAL: Authentication failed - cannot proceed with testing")
            return False
        
        # Step 2: Create test companies
        if not self.create_test_companies():
            print("❌ CRITICAL: Failed to create test companies - cannot proceed with bulk delete test")
            return False
        
        # Step 3: Verify companies are initially active
        if not self.verify_companies_active():
            print("❌ CRITICAL: Test companies are not active - cannot proceed with bulk delete test")
            return False
        
        # Step 4: Test bulk delete functionality
        if not self.test_bulk_delete_companies():
            print("❌ CRITICAL: Bulk delete functionality FAILED!")
            return False
        
        # Step 5: Verify companies are marked as inactive
        if not self.verify_companies_inactive():
            print("❌ CRITICAL: Companies were not properly marked as inactive after bulk delete!")
            return False
        
        # Step 6: Test error handling
        self.test_bulk_delete_error_handling()
        
        # Summary
        print("\n" + "=" * 60)
        print("🎉 URGENT TEST SUMMARY 🎉")
        print("=" * 60)
        
        passed_tests = sum(1 for result in self.test_results if result["success"])
        total_tests = len(self.test_results)
        
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Failed: {total_tests - passed_tests}")
        print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
        
        if passed_tests >= 7:  # Core functionality tests
            print("\n✅ BULK DELETE FUNCTIONALITY IS WORKING!")
            print("✅ User's frustration should be resolved - backend is working correctly")
            return True
        else:
            print("\n❌ BULK DELETE FUNCTIONALITY HAS ISSUES!")
            print("❌ User's frustration is justified - backend needs fixing")
            return False

def main():
    tester = UrgentBulkDeleteTester()
    success = tester.run_urgent_test()
    
    if success:
        print("\n🔧 RECOMMENDATION: Check frontend implementation if user still has issues")
        sys.exit(0)
    else:
        print("\n🔧 RECOMMENDATION: Backend bulk delete needs immediate attention")
        sys.exit(1)

if __name__ == "__main__":
    main()