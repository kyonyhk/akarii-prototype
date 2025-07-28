#!/bin/bash

echo "=== Testing ./tm script across git worktrees ==="
echo

echo "1. Testing from main worktree:"
echo "Current directory: $(pwd)"
./tm next | grep "Next Task to Work On" || echo "Command failed"
echo

echo "2. Testing ./tm script exists in worktrees:"
ls -la ../akarii-dev-one/tm ../akarii-dev-two/tm ../akarii-dev-three/tm 2>/dev/null || echo "tm scripts not found in worktrees"
echo

echo "3. Verifying worktree list:"
git worktree list
echo

echo "4. Testing Task Master can run from current directory:"
task-master models | grep "Successfully retrieved" > /dev/null && echo "✅ Task Master accessible" || echo "❌ Task Master not accessible"
echo

echo "=== Test Complete ==="
echo "Usage: From any worktree, run './tm <command>' to manage tasks from main worktree"
echo "Example: './tm list', './tm next', './tm set-status --id=1 --status=done'"