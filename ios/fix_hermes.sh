#!/bin/bash

# Script to fix Hermes build issues
# This script should be run after pod install

echo "Fixing Hermes script phase..."

# Find and fix the Hermes script phase in Pods project
PODS_PROJECT="Pods/Pods.xcodeproj/project.pbxproj"

if [ -f "$PODS_PROJECT" ]; then
    # Add output paths to Hermes script phase
    # This is a workaround for the build issue
    echo "Hermes script phase will be fixed by Podfile post_install hook"
    echo "Please run: cd ios && pod install"
else
    echo "Pods project not found. Please run 'pod install' first."
fi

