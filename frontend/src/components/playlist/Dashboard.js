import React, { Fragment } from 'react';
import Form from './Form';
import Playlist from './Playlist';
import Album from './Album';
import Song from './Song';

export default function Dashboard() {
	return (
		<Fragment>
		  <Form />
		  <Playlist />
		  <Album />
		  <Song />
		</Fragment>
		
	)
		
}
