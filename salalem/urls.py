from rest_framework import routers
from .api import ArtistViewSet, AlbumViewSet, SongViewSet

router = routers.DefaultRouter()
router.register('api/salalem/Artists', ArtistViewSet, 'Artists')
router.register('api/salalem/Albums', AlbumViewSet, 'Albums')
router.register('api/salalem/Songs', SongViewSet, 'Songs')



 # urlpatterns = [
 # 	path('', include(router.urls))
 # ]
urlpatterns = router.urls