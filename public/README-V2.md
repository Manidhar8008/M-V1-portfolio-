# Portfolio V2

This branch upgrades the portfolio around four principles:

1. One canonical portfolio content model.
2. Founder + engineer story before technology density.
3. Case-study evidence instead of repository cards alone.
4. Public-safe Explorer behavior when the private/local API is unavailable.

## Important

`/resume.pdf` is intentionally referenced by the UI but is not generated in this code change. Add the final resume PDF before making that CTA production-facing.

The live Explorer now targets `/api/query` instead of a hardcoded `127.0.0.1:8000` endpoint. A deterministic public fallback keeps the interaction useful when no hosted API exists.
