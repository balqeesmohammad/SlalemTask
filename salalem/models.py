from django.db import models

class Artist(models.Model):
	artist_name = models.CharField(max_length=200)	

	class Meta:
		verbose_name_plural = "Artists"

	def __str__(self):
		return self.artist_name




class Album(models.Model):
	album_name = models.CharField(max_length=200)
	album_year = models.CharField(max_length=200)
	album_artist =models.ForeignKey(Artist, default=1, verbose_name="Artists", related_name='galleryAlbum',
	 db_column="album_artist", on_delete=models.CASCADE)
	#artist_name= models.ForeignKey(Artist, to_field='artist_name')

	# saved_reports = Artist.objects.all()
	# for r in saved_reports:
 #   		print( r.artist_name )



	class Meta:
		verbose_name_plural = "Albums"

	def __str__(self):
		return self.album_name




class Song(models.Model):
	song_title = models.CharField(max_length=200)
	song_path = models.CharField(max_length=200)
	song_album = models.ForeignKey(Album, default=1, verbose_name="Albums", db_column="song_album", on_delete=models.SET_DEFAULT)
	
	
	

	def __str__(self):
 	    return self.song_title



