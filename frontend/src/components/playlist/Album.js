import React, { Component,Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAlbums } from "../../actions/album";

export class Album extends Component {
	static PropTypes = {
		album: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.props.getAlbums();
	}

	render() {
		return (

			<Fragment>
				<h2>Abums List </h2>
				<table className="table table-striped">
				<thead>
				<tr>
				<th>album Name</th>
				<th>album Year</th>
				<th>album Artist</th>
				<th />
				</tr>
				</thead>
				<tbody>
				  { this.props.album.map(menu => (
				  	<tr key={menu.id}>
				  	   <td>{menu.album_name}</td>
				  	   <td>{menu.album_year}</td>
				  	   <td>{menu.artistName}</td>
				  	</tr>
				  	)) }
				</tbody>
				</table>
			</Fragment>
		)

    }
}
 const mapStateToProps = state => ({
 	album: state.album.album

 });

/// export default connect(mapStateToProps, { getAlbums })(Playlist); 

export default connect(mapStateToProps, { getAlbums })(Album);