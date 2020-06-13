import React, { useState } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

function App() {
	const [ palettes, setPalettes ] = useState(seedColors);
	const findPalette = (id) => {
		return palettes.find((palette) => {
			return palette.id === id;
		});
	};

	const savePalette = (newPalette) => {
		setPalettes([ ...palettes, newPalette ]);
	};

	return (
		<Switch>
			<Route
				exact
				path="/palette/new"
				render={(routeProps) => (
					<NewPaletteForm savePalette={savePalette} {...routeProps} palettes={palettes} />
				)}
			/>
			<Route exact path="/" render={(routeProps) => <PaletteList palettes={palettes} {...routeProps} />} />
			<Route
				exact
				path="/palette/:id"
				render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
			/>
			<Route
				exact
				path="/palette/:paletteId/:colorId"
				render={(routeProps) => (
					<SingleColorPalette
						colorId={routeProps.match.params.colorId}
						palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
					/>
				)}
			/>
		</Switch>
	);
}

export default App;
