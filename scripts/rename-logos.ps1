<#
Safe logo renamer for PowerShell (Windows).
- Creates a timestamped backup folder under public/certs/logos/backup-YYYYMMDDHHMMSS
- Copies source files to new slugified filenames and moves the originals into the backup folder
- Skips any mappings where the source is missing or the target already exists

Run from the project root in PowerShell:
  cd path\to\creative-portfolio-dashboard-1
  pwsh ./scripts/rename-logos.ps1
#>

$logosDir = Join-Path $PSScriptRoot '..\public\certs\logos' | Resolve-Path -ErrorAction SilentlyContinue
if (-not $logosDir) {
    Write-Error "Could not find directory 'public/certs/logos' from script location. Run the script from the project root or move it into your repo's scripts folder."
    exit 1
}
$logosDir = $logosDir.Path

$timestamp = Get-Date -Format 'yyyyMMddHHmmss'
$backupDir = Join-Path $logosDir ("backup-$timestamp")
New-Item -ItemType Directory -Force -Path $backupDir | Out-Null

# Explicit mapping discovered from existing files and desired slugified names
$map = @{
    'SRKR.jpeg' = 'srkr-engineering-college.jpeg'
    'SRKR.jpg'  = 'srkr-engineering-college.jpg'
    'SRKR.PNG'  = 'srkr-engineering-college.png'
    'SRKR.JPEG' = 'srkr-engineering-college.jpeg'

    'UNT.png'   = 'university-of-north-texas.png'
    'UNT.PNG'   = 'university-of-north-texas.png'
}

Write-Host "Logos directory: $logosDir"
Write-Host "Backup directory: $backupDir"

foreach ($entry in $map.GetEnumerator()) {
    $srcName = $entry.Key
    $targetName = $entry.Value

    $srcPath = Join-Path $logosDir $srcName
    $targetPath = Join-Path $logosDir $targetName

    if (-not (Test-Path $srcPath)) {
        Write-Host "Source not found: $srcName -> skipping" -ForegroundColor Yellow
        continue
    }

    if (Test-Path $targetPath) {
        Write-Host "Target already exists: $targetName -> skipping" -ForegroundColor Yellow
        continue
    }

    try {
        Copy-Item -Path $srcPath -Destination $targetPath -ErrorAction Stop
        Move-Item -Path $srcPath -Destination $backupDir -ErrorAction Stop
        Write-Host "Renamed: $srcName -> $targetName (original moved to backup)" -ForegroundColor Green
    } catch {
        Write-Error "Failed to rename $srcName -> $targetName : $_"
    }
}

Write-Host "Done. Review $logosDir and $backupDir" -ForegroundColor Cyan
