# Valorant Roulette (C#)

An ASP.NET Core rebuild of [valorant-roulette](https://github.com/N0tT1m/valorant-roulette) — randomises agents and maps for Valorant custom games, and hosts a clips page.

The original was a single JavaScript site. This version exists to practise splitting the same problem across a layered solution.

## Solution layout

| Project | Responsibility |
|---|---|
| `ValorantApp` | MVC web host — controllers, Razor views, startup |
| `ValorantApp.Contracts` | Interfaces shared across layers |
| `ValorantApp.Models` | View models and domain types |
| `ValorantApp.Data` | Data access |
| `ValorantApp.Services` | Application services |
| `ValorantApp.Randomizer` | The agent/map selection logic |

Views: `AgentPicker`, `MapPicker`, `Clips`, `Index`.

## Running

```bash
dotnet restore
dotnet run --project ValorantApp
```

A `Dockerfile` is included, and the repo carries Azure Web Deploy profiles from when it was hosted there.

## Status

Complete and not actively developed — kept as a reference for the layered project structure.
