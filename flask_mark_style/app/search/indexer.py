class SearchIndexer:
    def __init__(self, path):
        self.path = path

    def reindex(self):
        print(f"Reindexing search at {self.path}")

    def search(self, query):
        return []
