from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')
    

# ####################  part_ones

# def single_slug(request, single_slug):
#     albums = [c.artist_name for c in Artist.objects.all()]
#     if single_slug in albums:
#       matching_series = Album.objects.filter(album_artist__artist_name=single_slug)
#       series_urls = {}
#       for m in matching_series.all():

#       	part_one = Song.objects.filter(song_album__album_artist=m.song_album)
#       	series_urls[m] = part_one.song_title
      
#       return render(request=request,
#                     template_name='main/albums.html',
#                     context={"part_ones": series_urls})



# #########################################################################

