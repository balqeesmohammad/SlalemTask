# Generated by Django 3.0.4 on 2020-05-02 14:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('salalem', '0007_auto_20200501_0632'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='album_artist',
            field=models.ForeignKey(db_column='album_artist', default=1, on_delete=django.db.models.deletion.CASCADE, related_name='galleryAlbum', to='salalem.Artist', verbose_name='Artists'),
        ),
    ]
