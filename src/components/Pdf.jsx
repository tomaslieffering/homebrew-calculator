import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

function Pdf(props) {
	const { ratio, yourAmount, yourSelected, malts, hops, title, notes } = props;

	Font.register({
		family: 'Rubik',
		src: 'https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-WYi1UA.ttf'
	});

	const styles = StyleSheet.create({
		page: {
			flexDirection: 'column',
			backgroundColor: '#E4E4E4',
			justifyContent: 'flex-start',
			padding: 40,
			fontFamily: "Rubik"
		},
		section: {
			fontSize: 20,
			paddingBottom: 10,
			borderBottom: "1px solid gray",
			marginBottom: 20
		},
		title: {
			fontWeight: 1000,
			fontSize: 30,
			paddingTop: 10,
			paddingBottom: 20,
		},
		row: {
			flexDirection: 'row',
			paddingBottom: 5,
			paddingLeft: 20
		},
		inlineRow: {
			flexDirection: 'row',
			paddingBottom: 5,
		},
		subtitle: {
			paddingBottom: 5,
			fontWeight: 1000,
			paddingRight: 10,
		},
		name: {
			fontWeight: 1000,
			paddingRight: 10,
		},
	});

	const listIngredient = (ingredients) => {
		return ingredients.map((ingredient) => {
			return (
				<View key={0} style={styles.row}>
					<Text style={styles.name}>{ingredient.name}:</Text>
					<Text>{doConversion(ingredient)}</Text>
				</View>
			);
		});
	}

	const doConversion = (ingredient) => {
		if (ingredient.unit == "oz") {
			return `${Math.round((ingredient.amount * 28.35 * ratio) * 100) / 100} g`
		}
		else if (ingredient.unit == "lbs") {
			return `${Math.round((ingredient.amount / 2.205 * ratio) * 100) / 100} kg`
		}
	}

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.title}>
					<Text>{title}</Text>
				</View>
				<View style={styles.section}>
					<Text style={styles.subtitle}>Malts:</Text>
					{listIngredient(malts)}
				</View>

				<View style={styles.section}>
					<Text style={styles.subtitle}>Hops:</Text>
					{listIngredient(hops)}
				</View>

				<View>
					<View style={styles.section}>
						<View style={styles.inlineRow}>
							<Text style={styles.subtitle}>Final Volume:</Text>
							<Text>{yourAmount}</Text>
							<Text>{yourSelected}</Text>
						</View>
					</View>

				</View>

				<View style={styles.section}>
					<Text style={styles.subtitle}>Brewer notes:</Text>
					<View style={styles.row}>
						<Text>{notes}</Text>
					</View>
				</View>

			</Page>
		</Document>
	);

}

export default Pdf;