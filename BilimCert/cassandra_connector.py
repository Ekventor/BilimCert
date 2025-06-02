from cassandra.cluster import Cluster

_cluster = Cluster(['127.0.0.1'])
_session = _cluster.connect('news_tracking')

def get_session():
    return _session
