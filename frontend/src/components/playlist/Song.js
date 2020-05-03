import React, { Component,Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSongs } from "../../actions/song";

export class Song extends Component {
	static PropTypes = {
		song: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.props.getSongs();
	}

	render() {
		return (

			<Fragment>
				<h2>Song List</h2>
				<table className="table table-striped">
				<thead>
				<tr>
				<th>Song Title</th>
				<th>Song Path</th>
				<th>Song Album</th>
				<th />
				</tr>
				</thead>
				<tbody>
				  { this.props.song.map(menu => (
				  	<tr key={menu.id}>

				  	   <td>{menu.song_title}</td>
				  	   <td>{menu.song_path}</td>
				  	   <td>{menu.songAlbum}</td>
				  	</tr>
				  	)) }
				</tbody>
				</table>
			</Fragment>
		)

    }
}
 const mapStateToProps = state => ({
 	song: state.song.song

 });

/// export default connect(mapStateToProps, { getPlaylists })(Playlist); 

export default connect(mapStateToProps, { getSongs })(Song);