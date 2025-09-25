#!/usr/bin/env python3
"""
Script pentru verificarea statusului deploy-ului CASHPOT V5
"""

import requests
import time
import sys

def print_header():
    """Print header"""
    print("🔍" + "=" * 60)
    print("🔍  CASHPOT V5 - DEPLOYMENT STATUS CHECK")
    print("🔍" + "=" * 60)
    print()

def check_github_pages():
    """Check GitHub Pages status"""
    print("🌐 Checking GitHub Pages...")
    
    github_pages_url = "https://jeka7ro.github.io/cashpot-v5"
    
    try:
        response = requests.get(github_pages_url, timeout=10)
        if response.status_code == 200:
            print(f"✅ GitHub Pages is live: {github_pages_url}")
            return True
        else:
            print(f"⚠️  GitHub Pages returned status {response.status_code}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ GitHub Pages not accessible: {e}")
        return False

def check_backend():
    """Check backend status"""
    print("🔧 Checking backend...")
    
    backend_urls = [
        "https://cashpot-v5.onrender.com",
        "https://cashpot-v5.onrender.com/api/health"
    ]
    
    for url in backend_urls:
        try:
            response = requests.get(url, timeout=10)
            if response.status_code == 200:
                print(f"✅ Backend is live: {url}")
                return True
            else:
                print(f"⚠️  Backend returned status {response.status_code} for {url}")
        except requests.exceptions.RequestException as e:
            print(f"❌ Backend not accessible at {url}: {e}")
    
    return False

def check_github_actions():
    """Check GitHub Actions status"""
    print("⚙️  Checking GitHub Actions...")
    
    # GitHub API URL for actions
    api_url = "https://api.github.com/repos/jeka7ro/cashpot-v5/actions/runs"
    
    try:
        response = requests.get(api_url, timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data.get('workflow_runs'):
                latest_run = data['workflow_runs'][0]
                status = latest_run.get('status', 'unknown')
                conclusion = latest_run.get('conclusion', 'unknown')
                
                print(f"📊 Latest workflow run:")
                print(f"   Status: {status}")
                print(f"   Conclusion: {conclusion}")
                print(f"   URL: {latest_run.get('html_url', 'N/A')}")
                
                if status == 'completed' and conclusion == 'success':
                    print("✅ GitHub Actions deployment successful!")
                    return True
                elif status == 'in_progress':
                    print("⏳ GitHub Actions deployment in progress...")
                    return False
                else:
                    print("❌ GitHub Actions deployment failed or incomplete")
                    return False
            else:
                print("❌ No workflow runs found")
                return False
        else:
            print(f"❌ GitHub API returned status {response.status_code}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ GitHub API not accessible: {e}")
        return False

def main():
    """Main function"""
    print_header()
    
    print("🔍 Checking deployment status...")
    print()
    
    # Check GitHub Pages
    pages_status = check_github_pages()
    print()
    
    # Check backend
    backend_status = check_backend()
    print()
    
    # Check GitHub Actions
    actions_status = check_github_actions()
    print()
    
    # Summary
    print("📋 DEPLOYMENT SUMMARY:")
    print("-" * 30)
    print(f"🌐 GitHub Pages: {'✅ Live' if pages_status else '❌ Not accessible'}")
    print(f"🔧 Backend: {'✅ Live' if backend_status else '❌ Not accessible'}")
    print(f"⚙️  GitHub Actions: {'✅ Success' if actions_status else '❌ Failed/In progress'}")
    
    if pages_status and backend_status:
        print("\n🎉 DEPLOYMENT SUCCESSFUL!")
        print("🔗 Your app is live at: https://jeka7ro.github.io/cashpot-v5")
    else:
        print("\n⚠️  DEPLOYMENT INCOMPLETE")
        print("📋 Next steps:")
        if not actions_status:
            print("1. Check GitHub Actions workflow in repository")
        if not backend_status:
            print("2. Deploy backend to Render or Railway")
        if not pages_status:
            print("3. Enable GitHub Pages in repository settings")
            print("4. Add BACKEND_URL secret to repository")

if __name__ == "__main__":
    main()