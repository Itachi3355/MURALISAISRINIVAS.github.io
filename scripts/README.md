rename-logos.ps1

This PowerShell script helps rename your downloaded logo files to the slugified filenames expected by the app.

Usage (PowerShell / pwsh):
  cd <repo-root>/creative-portfolio-dashboard-1
  pwsh ./scripts/rename-logos.ps1

What it does:
- Creates a timestamped backup folder under `public/certs/logos/backup-<timestamp>`
- Copies the existing files to the slugified target names and moves original files into the backup
- Skips mappings when the source is missing or the target already exists

Mappings included (safe to edit in the script):
- `SRKR.jpeg` -> `srkr-engineering-college.jpeg`
- `UNT.png`   -> `university-of-north-texas.png`

Edit `scripts/rename-logos.ps1` to adjust mappings if your filenames differ.
