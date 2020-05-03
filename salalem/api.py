from salalem.models import Artist, Album, Song
from rest_framework import viewsets, permissions
from .Serializers import ArtistSerializer, AlbumSerializer, SongSerializer


class ArtistViewSet(viewsets.ModelViewSet):

    queryset = Artist.objects.all()


    permission_classes = [
	permissions.AllowAny
	]

    serializer_class = ArtistSerializer
    

class AlbumViewSet(viewsets.ModelViewSet):

    queryset = Album.objects.all()

    permission_classes = [
	permissions.AllowAny
	]

    serializer_class = AlbumSerializer
    

class SongViewSet(viewsets.ModelViewSet):

    queryset = Song.objects.all()


    permission_classes = [
	permissions.AllowAny
	]

    serializer_class = SongSerializer







