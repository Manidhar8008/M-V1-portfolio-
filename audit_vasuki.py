import sqlite3

db = sqlite3.connect("/data/data/com.termux/files/home/vasuki/vasuki.db")
cur = db.cursor()

tables = [r[0] for r in cur.execute(
    "SELECT name FROM sqlite_master WHERE type='table'"
)]

print("\nVASUKI DATABASE INVENTORY\n")

for table in sorted(tables):
    try:
        count = cur.execute(
            f"SELECT COUNT(*) FROM {table}"
        ).fetchone()[0]

        cols = cur.execute(
            f"PRAGMA table_info({table})"
        ).fetchall()

        print(f"{table:30} rows={count}")
        print(" columns:",
              ", ".join(c[1] for c in cols[:15]))
        print()

    except Exception as e:
        print(table, e)

db.close()
