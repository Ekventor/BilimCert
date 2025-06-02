from datetime import datetime
from cassandra_connector import get_session

def track_news_view(post_id: int, ip_address: str) -> bool:
    session = get_session()
    result = session.execute(
        """
        INSERT INTO news_views (post_id, ip_address, viewed_at)
        VALUES (%s, %s, %s) IF NOT EXISTS
        """,
        (post_id, ip_address, datetime.utcnow())
    )
    return result[0].applied

def get_viewed_at(post_id: int, ip_address: str):
    session = get_session()
    row = session.execute(
        """
        SELECT viewed_at FROM news_views
        WHERE post_id = %s AND ip_address = %s
        """,
        (post_id, ip_address)
    ).one()

    return row.viewed_at if row else None

def get_views_count(post_id: int) -> int:
    session = get_session()
    rows = session.execute(
        "SELECT ip_address FROM news_views WHERE post_id = %s",
        (post_id,)
    )
    return sum(1 for _ in rows)
