#!/bin/bash

# Task Master Git Worktree Manager
# This script ensures all Task Master operations happen on the main worktree
# regardless of which worktree you're currently in.

set -e

# Function to find the main worktree path
find_main_worktree() {
    # Get the git common directory (shared across all worktrees)
    local git_common_dir=$(git rev-parse --git-common-dir)
    
    # The main worktree is typically the parent of the .git directory
    # For the main worktree, --git-common-dir returns .git
    # For linked worktrees, it returns the path to the main .git directory
    
    if [[ "$git_common_dir" == ".git" ]]; then
        # We're already in the main worktree
        echo "$(pwd)"
    else
        # We're in a linked worktree, find the main one
        local main_worktree=$(dirname "$git_common_dir")
        echo "$main_worktree"
    fi
}

# Function to check if we're in a git repository
check_git_repo() {
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        echo "Error: Not in a git repository"
        exit 1
    fi
}

# Main execution
main() {
    check_git_repo
    
    local main_worktree=$(find_main_worktree)
    local current_dir=$(pwd)
    
    # Print debug info if TM_DEBUG is set
    if [[ "${TM_DEBUG:-}" == "1" ]]; then
        echo "Current worktree: $current_dir"
        echo "Main worktree: $main_worktree"
        echo "Task Master command: task-master $*"
        echo "---"
    fi
    
    # Change to main worktree and execute task-master command
    cd "$main_worktree"
    
    # Execute the task-master command with all passed arguments
    if [[ $# -eq 0 ]]; then
        # No arguments provided, show help
        task-master --help
    else
        task-master "$@"
    fi
    
    # Return to original directory
    cd "$current_dir"
}

# Run main function with all arguments
main "$@"