import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import styles from './styles/PaletteListStyles';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = { openDialogDelete: false, deleteDialogId: '' };
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleDeletePalette = this.handleDeletePalette.bind(this);
	}

	handleOpen(id) {
		this.setState({ openDialogDelete: true, deleteDialogId: id });
	}

	handleClose() {
		this.setState({ openDialogDelete: false, deleteDialogId: '' });
	}

	goToPalette(id) {
		this.props.history.push(`/palette/${id}`);
	}

	handleDeletePalette() {
		this.props.deletePalette(this.state.deleteDialogId);
		this.handleClose();
	}

	render() {
		const { palettes, classes } = this.props;
		const { openDialogDelete } = this.state;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<div className={classes.nav}>
						<h1>Flateria UI Colors</h1>
						<Link to="/palette/new">Create Palette</Link>
					</div>
					<TransitionGroup className={classes.palettes}>
						{palettes.map((palette) => (
							<CSSTransition key={palette.id} timeout={300} classNames="fade">
								<MiniPalette
									{...palette}
									key={palette.id}
									id={palette.id}
									handleClick={() => this.goToPalette(palette.id)}
									openDialog={this.handleOpen}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
				<Dialog open={openDialogDelete} onClose={this.handleClose}>
					<DialogTitle>Delete this palette?</DialogTitle>
					<List>
						<ListItem button onClick={this.handleDeletePalette}>
							<ListItemAvatar>
								<Avatar style={{ color: blue[600], backgroundColor: blue[100] }}>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Delete</ListItemText>
						</ListItem>
						<ListItem button onClick={this.handleClose}>
							<ListItemAvatar>
								<Avatar style={{ color: red[600], backgroundColor: red[100] }}>
									<CloseIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Cancel</ListItemText>
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
