# Generated by Django 3.0.4 on 2020-05-01 02:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('salalem', '0005_auto_20200501_0500'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='album_artist',
            field=models.ForeignKey(db_column='album_artist', default=1, on_delete=django.db.models.deletion.CASCADE, to='salalem.Artist', verbose_name='Artists'),
        ),
        migrations.AlterField(
            model_name='song',
            name='song_album',
            field=models.ForeignKey(db_column='song_album', default=1, on_delete=django.db.models.deletion.SET_DEFAULT, to='salalem.Album', verbose_name='Albums'),
        ),
    ]
