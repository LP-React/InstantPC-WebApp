# Paso 0: Mapear nombres de SteamID a alias amigables
$steamIdAliases = @{
    "467092195" = "InstantPC-Usuario01"
    "1746600723" = "InstantPC-Usuario02"
}

# Paso 1: Ruta base donde se guardarán los respaldos
$backupBase = "C:\Users\insta\OneDrive\Saved Games"

# Paso 2: Seleccionar usuario destino
$users = Get-ChildItem -Path $backupBase -Directory
if ($users.Count -eq 0) {
    Write-Host "❌ No hay carpetas de usuario en: $backupBase"
    exit
}

Write-Host "`nUsuarios disponibles:"
for ($i = 0; $i -lt $users.Count; $i++) {
    Write-Host "$i - $($users[$i].Name)"
}
$userIndex = Read-Host "`nSelecciona el número del usuario destino"
if (-not ($userIndex -match '^\d+$') -or $userIndex -ge $users.Count) {
    Write-Host "❌ Selección inválida. Abortando."
    exit
}
$selectedUserPath = $users[$userIndex].FullName

# Paso 3: Elegir carpeta de juego donde guardar el backup
$gameDirs = Get-ChildItem -Path $selectedUserPath -Directory
if ($gameDirs.Count -eq 0) {
    Write-Host "`nNo hay carpetas de juegos en: $selectedUserPath"
    exit
}
Write-Host "`nCarpetas de juegos detectadas:"
for ($i = 0; $i -lt $gameDirs.Count; $i++) {
    Write-Host "$i - $($gameDirs[$i].Name)"
}
$gameSaveFolderIndex = Read-Host "`nSelecciona la carpeta donde guardar el respaldo"
if (-not ($gameSaveFolderIndex -match '^\d+$') -or $gameSaveFolderIndex -ge $gameDirs.Count) {
    Write-Host "❌ Selección inválida. Abortando."
    exit
}
$finalBackupPath = $gameDirs[$gameSaveFolderIndex].FullName

# Paso 4: Definir juegos y rutas reales de guardado
$gamePaths = @{
    "The Last of Us" = "C:\Users\InstantPC-01\Saved Games\The Last of Us Part I\users"
    "Re7 Biohazard"  = "C:\Program Files (x86)\Steam\userdata"
}

# Paso 5: Elegir qué juego respaldar
Write-Host "`nJuegos disponibles para respaldo:"
$gameNames = $gamePaths.Keys
for ($i = 0; $i -lt $gameNames.Count; $i++) {
    Write-Host "$i - $($gameNames[$i])"
}
$gameSourceIndex = Read-Host "`nSelecciona el juego que vas a respaldar"
if (-not ($gameSourceIndex -match '^\d+$') -or $gameSourceIndex -ge $gameNames.Count) {
    Write-Host "❌ Selección inválida. Abortando."
    exit
}
$selectedGame = $gameNames[$gameSourceIndex]
$sourceGamePath = $gamePaths[$selectedGame]

# Paso 6: Listar usuarios Steam (carpetas dentro del juego)
$steamFolders = Get-ChildItem -Path $sourceGamePath -Directory
if ($steamFolders.Count -eq 0) {
    Write-Host "❌ No se encontraron usuarios Steam en: $sourceGamePath"
    exit
}

Write-Host "`nUsuarios Steam detectados para el juego:"
for ($i = 0; $i -lt $steamFolders.Count; $i++) {
    $id = $steamFolders[$i].Name
    $alias = $steamIdAliases[$id]
    if (-not $alias) { $alias = "(sin alias)" }
    Write-Host "$i - $alias ($id)"
}
$steamIndex = Read-Host "`nSelecciona el número del usuario Steam que deseas respaldar"
if (-not ($steamIndex -match '^\d+$') -or $steamIndex -ge $steamFolders.Count) {
    Write-Host "❌ Selección inválida. Abortando."
    exit
}
$steamSourcePath = $steamFolders[$steamIndex].FullName

# Paso 7: Copiar carpeta completa al destino elegido
Copy-Item -Path $steamSourcePath -Destination $finalBackupPath -Recurse -Force

Write-Host "`n✅ Backup completado exitosamente."
Write-Host "Origen: $steamSourcePath"
Write-Host "Destino: $finalBackupPath"
