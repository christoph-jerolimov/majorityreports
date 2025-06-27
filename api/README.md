# ✨ Majority Reports API 🔮

WIP!

A Python FastAPI application providing:

**Key Features:**
- RESTful API with OpenAPI documentation
- SQLite/SQL database backend
- Namespace-based multi-tenancy
- Tag-based organization
- CRUD Operations for all entities and events
- **Query Engine**: Advanced querying capabilities with filtering and aggregation
- **Tagging System**: Flexible tagging for organization and categorization
- **Reports**: Pre-built reports including:
  - Latest events analysis
  - Most active items and actors
  - Average metrics
  - Feedback summaries

## Development

### Run locally

```
make dev
```

### Build container image

```
podman build . --tag majorityreports:next
```

### Run container image

```
podman run majorityreports:next
```
