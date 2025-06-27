# ✨ Majority Reports 🔮

A comprehensive data management and reporting platform that provides APIs for tracking events, feedback, and generating insights across different namespaces and entities.

## Overview

Majority Reports is a monorepo containing multiple interconnected components:

- **API**: A FastAPI-based REST API for data management and reporting
- **Dashboard**: Backstage-based web interface for data visualization and management
- **Documentation**: Comprehensive documentation and blog
- **Website**: Docusaurus-based project website

## Architecture

The system is built around key entities:

- **Namespaces**: Organizational units that contain all other entities
- **Items**: Core entities being tracked and reported on
- **Actors**: Entities that perform actions on items
- **Events**: Actions or occurrences related to items
- **Feedback**: User feedback and ratings for items

## Quick Start

### Prerequisites

- Python and pip
- Node.js
- Make

### Development Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd majorityreports
   ```

2. **Start the API backend:**
   ```bash
   cd api
   make install
   make dev
   ```

3. **Start the dashboard:**
   ```bash
   cd dashboard
   yarn install
   yarn start
   ```

4. **Access the applications:**
   - API Documentation: `http://localhost:8000`
   - Dashboard: `http://localhost:3000`

## Container Deployment

### Build Container Image

```bash
cd api
podman build . --tag majorityreports:latest
```

### Run Container

```bash
podman run -p 8000:8000 majorityreports:latest
```

## Development

### API Development

```bash
cd api
make install  # Install dependencies
make dev      # Start development server
make test     # Run tests
```

### Dashboard Development

```bash
cd dashboard
yarn install  # Install dependencies
yarn start    # Start development server
yarn build    # Build for production
```

### Testing

The project includes comprehensive test suites:

- **API Tests**: Located in `/api/tests/` with Bruno HTTP client tests
- **Dashboard Tests**: Jest and React Testing Library tests
- **End-to-End Tests**: Playwright tests for full application workflows

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests as appropriate
5. Submit a pull request

## License

This project is licensed under the terms specified in the LICENSE file.

## Support

For questions, issues, or contributions:

- Check the documentation in `/docs`
- Review existing issues and discussions
- Create new issues for bugs or feature requests

---

*Majority Reports - Comprehensive data management and reporting platform*

