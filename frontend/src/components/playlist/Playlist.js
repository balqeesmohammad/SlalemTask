import React, { Component,Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPlaylists } from "../../actions/playlist";

export class Playlist extends Component {
	static PropTypes = {
		playlist: PropTypes.array.isRequired
	};

	componentDidMount() {
		this.props.getPlaylists();
	}

	render() {
		return (

			<Fragment>
				<h2>Artist List</h2>
				<table className="table table-striped">
				<thead>
				<tr>
				
				<th>Artist Name</th>
				<th />
				</tr>
				</thead>
				<tbody>
				  { this.props.playlist.map(menu => (
				  	<tr key={menu.id}>
				  	   
				  	   <td>{menu.artist_name}</td>
				  	</tr>
				  	)) }
				</tbody>
				</table>
			</Fragment>
		)

    }
}
 const mapStateToProps = state => ({
 	playlist: state.playlist.playlist

 });

// export default connect(mapStateToProps, { getPlaylists })(Playlist); 

export default connect(mapStateToProps, { getPlaylists })(Playlist);