#!/usr/bin/env bash

SCRIPT_DIR="$(dirname -- "${BASH_SOURCE[0]}")"
PROJECT_HOOKS_DIR="$(dirname "$SCRIPT_DIR")"
PROJECT_DIR="$(dirname "$PROJECT_HOOKS_DIR")"
PROJECT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
PROJECT_README_UPTODATE=0
PROJECT_README_CHECKSUM=$(sha1sum "$PROJECT_DIR/templates/README.ejs" | awk '{print $1}')

if [ -f "$PROJECT_DIR/README.md" ];
then
  PROJECT_README_UPTODATE=$(grep -c "<\!-- template-checksum: $PROJECT_README_CHECKSUM -->" "$PROJECT_DIR/README.md") || true
  if [ "$PROJECT_README_UPTODATE" -eq 1 ];
  then
    modified=$(git diff --name-only --cached "$PROJECT_DIR/README.md" | wc -l) || true
    if [ "$modified" -eq 1 ];
    then
      modified=$(git diff --cached "$PROJECT_DIR/README.md" | grep -c "+<\!-- template-checksum: $PROJECT_README_CHECKSUM -->") || true
      if [ "$modified" -eq 1 ];
      then
        PROJECT_README_UPTODATE=0
      fi
    fi
  fi

  if [ "$PROJECT_README_UPTODATE" -eq 1 ];
  then
    PROJECT_README_UPTODATE=$(grep -c "<\!-- branch: $PROJECT_BRANCH -->" "$PROJECT_DIR/README.md") || true
    if [ "$PROJECT_README_UPTODATE" -eq 1 ];
    then
      modified=$(git diff --name-only --cached "$PROJECT_DIR/README.md" | wc -l) || true
      if [ "$modified" -eq 1 ];
      then
        modified=$(git diff --cached "$PROJECT_DIR/README.md" | grep -c "+<\!-- branch: $PROJECT_BRANCH -->") || true
        if [ "$modified" -eq 1 ];
        then
          PROJECT_README_UPTODATE=0
        fi
      fi
    fi
  fi
fi

export PROJECT_BRANCH
export PROJECT_DIR
export PROJECT_HOOKS_DIR
export PROJECT_README_CHECKSUM
export PROJECT_README_UPTODATE
