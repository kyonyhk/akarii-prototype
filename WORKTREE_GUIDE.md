# Git Worktree Setup for Akarii Development

## Overview

This project uses git worktrees to enable parallel development on different tasks while maintaining synchronized Task Master files.

## Available Worktrees

- **Main**: `/Users/kuoloonchong/Desktop/akarii` (main branch) - Primary development and Task Master management
- **Dev One**: `/Users/kuoloonchong/Desktop/akarii-dev-one` (dev-one branch) - Development worktree 1
- **Dev Two**: `/Users/kuoloonchong/Desktop/akarii-dev-two` (dev-two branch) - Development worktree 2  
- **Dev Three**: `/Users/kuoloonchong/Desktop/akarii-dev-three` (dev-three branch) - Development worktree 3

## Task Master Management

### The `./tm` Script

All worktrees include a `./tm` script that ensures Task Master operations always run against the main worktree's `.taskmaster` directory, preventing sync issues.

### Usage Examples

```bash
# From any worktree directory:
./tm list                                    # View all tasks
./tm next                                   # Get next available task
./tm show 1                                 # View task details
./tm set-status --id=1 --status=in-progress # Start working on task
./tm set-status --id=1 --status=done        # Mark task complete
./tm expand --id=2                          # Break task into subtasks
```

### Debug Mode

```bash
TM_DEBUG=1 ./tm list    # Shows which worktree is being used
```

## Development Workflow

1. **Start from main worktree**: Plan and manage tasks
   ```bash
   cd /Users/kuoloonchong/Desktop/akarii
   ./tm next
   ./tm show <task-id>
   ```

2. **Switch to development worktree**: Implement features
   ```bash
   cd /Users/kuoloonchong/Desktop/akarii-dev-one
   # Work on code implementation
   ./tm set-status --id=<task-id> --status=in-progress
   ```

3. **Update task progress**: From any worktree
   ```bash
   ./tm update-subtask --id=1.2 --prompt="Completed auth integration"
   ./tm set-status --id=1.2 --status=done
   ```

4. **Merge work**: Return to main to integrate changes
   ```bash
   cd /Users/kuoloonchong/Desktop/akarii
   git merge dev-one
   ./tm next  # Get next task
   ```

## Benefits

- **Synchronized tasks**: All worktrees share the same task data
- **Parallel development**: Work on multiple features simultaneously  
- **No merge conflicts**: Task Master files stay in main worktree
- **Flexible workflow**: Switch between implementation contexts easily

## Commands Reference

```bash
# Worktree management
git worktree list                           # Show all worktrees
git worktree remove <path>                  # Remove a worktree
git worktree add <path> -b <branch>         # Create new worktree

# Task Master (use ./tm from any worktree)
./tm list                                   # View tasks
./tm next                                   # Next available task
./tm set-status --id=X --status=STATUS     # Update task status
./tm show X                                 # View task details
./tm expand --id=X                          # Break into subtasks
```