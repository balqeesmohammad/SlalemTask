from rest_framework import serializers
from salalem.models import Artist, Album, Song
from django.http import JsonResponse
from django.forms.models import model_to_dict
#lead serializer
class ArtistSerializer(serializers.ModelSerializer):
	class Meta:
		model = Artist
		fields = '__all__'

class AlbumSerializer(serializers.ModelSerializer):
	artistName = serializers.SerializerMethodField()
	class Meta:
		model = Album
		fields = '__all__'
		

	def get_artistName(self, obj):
		return Artist.objects.filter(pk=obj.album_artist.pk).first().artist_name


class SongSerializer(serializers.ModelSerializer):
	songAlbum = serializers.SerializerMethodField()
	class Meta:
	    model  = Song 
	    fields = '__all__'
	    
	#Album.objects.filter(pk=song_album.pk)
# Album.objects. filter(album_name=album_name)
	def get_songAlbum(self, obj):
		#return obj.album_artist
		return obj.song_album.album_name



# class SongSerializer(serializers.ModelSerializer):
#  		class Meta:
#  			model=Song
#  			fields = '__all__'


# class SongSerializer(serializers.ModelSerializer):
# 	albumArtist = serializers.SerializerMethodField()
# 	class Meta:
# 		model = Song
# 		fields = '__all__'

# 	def get_albumArtist(self, obj):
# 		return Album.objects.filter(pk=obj.song_album.pk).first().album_artist





