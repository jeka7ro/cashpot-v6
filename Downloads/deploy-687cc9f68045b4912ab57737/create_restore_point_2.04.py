#!/usr/bin/env python3
"""
Create Restore Point 2.04 - Timer Fix
Saves the current state of the application with the timer functionality fix
"""

import os
import shutil
import json
from datetime import datetime
import time

def create_restore_point():
    # Create timestamp for the restore point
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    restore_dir = f"restore_point_2.04_backup_{timestamp}"
    
    # Create the restore directory
    os.makedirs(restore_dir, exist_ok=True)
    
    # Files to backup
    frontend_files = [
        "frontend/src/app.js",
        "frontend/src/app.css", 
        "frontend/src/index.css",
        "frontend/src/index.js",
        "frontend/package.json",
        "frontend/craco.config.js",
        "frontend/tailwind.config.js"
    ]
    
    backend_files = [
        "backend/server.py",
        "backend/requirements.txt"
    ]
    
    config_files = [
        "package.json",
        "tailwind.config.js",
        "craco.config.js"
    ]
    
    # Copy frontend files
    print("📁 Copying frontend files...")
    for file_path in frontend_files:
        if os.path.exists(file_path):
            dest_path = os.path.join(restore_dir, file_path)
            os.makedirs(os.path.dirname(dest_path), exist_ok=True)
            shutil.copy2(file_path, dest_path)
            print(f"  ✅ {file_path}")
        else:
            print(f"  ❌ {file_path} - not found")
    
    # Copy backend files
    print("📁 Copying backend files...")
    for file_path in backend_files:
        if os.path.exists(file_path):
            dest_path = os.path.join(restore_dir, file_path)
            os.makedirs(os.path.dirname(dest_path), exist_ok=True)
            shutil.copy2(file_path, dest_path)
            print(f"  ✅ {file_path}")
        else:
            print(f"  ❌ {file_path} - not found")
    
    # Copy config files
    print("📁 Copying config files...")
    for file_path in config_files:
        if os.path.exists(file_path):
            dest_path = os.path.join(restore_dir, file_path)
            shutil.copy2(file_path, dest_path)
            print(f"  ✅ {file_path}")
        else:
            print(f"  ❌ {file_path} - not found")
    
    # Create metadata
    metadata = {
        "restore_point": "2.04",
        "timestamp": timestamp,
        "description": "Timer functionality fix - scheduled changes now apply to backend",
        "changes": [
            "Fixed timer expiration to apply changes to backend",
            "Added API calls to update slot machines when timer expires",
            "Added error handling for failed updates",
            "Added data refresh after successful updates"
        ],
        "files_backed_up": frontend_files + backend_files + config_files
    }
    
    # Save metadata
    metadata_file = os.path.join(restore_dir, f"restore_point_2.04_metadata_{timestamp}.json")
    with open(metadata_file, 'w') as f:
        json.dump(metadata, f, indent=2)
    
    # Create summary
    summary_content = f"""# RESTORE POINT 2.04 - TIMER FIX

## Created: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}

## Description
Fixed the critical issue where scheduled changes were not being applied to the backend after timer expiration.

## Key Changes
- **Timer Expiration Fix**: Modified `timerTick` function to apply changes to backend
- **API Integration**: Added proper API calls to update slot machines
- **Error Handling**: Added comprehensive error handling for failed updates
- **Data Refresh**: Added automatic data refresh after successful updates

## Technical Details
- Modified `frontend/src/app.js` in the `timerTick` function
- Added async/await pattern for backend updates
- Added support for comprehensive field changes (status, provider, game_mix, cabinet, model, location)
- Added fallback support for old change format
- Added proper error notifications

## Files Modified
- `frontend/src/app.js` - Timer functionality fix

## Status
✅ **READY FOR PRODUCTION**

This restore point fixes the critical issue where scheduled changes were not being applied to the database after timer expiration.
"""
    
    summary_file = os.path.join(restore_dir, "RESTORE_POINT_2.04_SUMMARY.md")
    with open(summary_file, 'w') as f:
        f.write(summary_content)
    
    print(f"\n🎉 Restore Point 2.04 created successfully!")
    print(f"📁 Location: {restore_dir}")
    print(f"📄 Metadata: {metadata_file}")
    print(f"📄 Summary: {summary_file}")
    print(f"⏰ Timestamp: {timestamp}")
    
    return restore_dir

if __name__ == "__main__":
    create_restore_point() 