import Header from './components/Header'
import Welcome from './components/Welcome'
import Popular from './components/Popular'
import Brands from './components/Brands'
import NewTools from './components/NewTools'
import Slider from './components/Slider'
import './App.css'
import { useState } from 'react'
import notliked from './imgs/like.png'
import liked from './imgs/liked.png'
import figma from './imgs/figma.svg'
import sketch from './imgs/logos_sketch.svg'
import vscode from './imgs/vscode.svg'
import notion from './imgs/notion.png'
import slack from './imgs/slack.svg'
import invision from './imgs/invision.svg'
import zeplin from './imgs/zeplin.png'
import phpstorm from './imgs/phpstorm.png'
import toolbox from './imgs/toolbox.png'
import procreate from './imgs/procreate.png'
import author1 from './imgs/dav.png'
import author2 from './imgs/garfield.png'

function App() {
	const [favourites, SetFavourites] = useState([])
	const [sliders, SetSliders] = useState([
		{
			photo: author1,
			author_name: 'Ronald Richards',
			job: 'Project Manager',
			paragraph:
				'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.',
		},
		{
			photo: author2,
			author_name: 'Andrew Grafield',
			job: "My friend's idol",
			paragraph:
				'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.',
		},
		{
			photo: author1,
			author_name: 'Ronald Hus',
			job: 'Project Manager',
			paragraph:
				'Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.',
		},
	])
	const [data, SetData] = useState([
		{
			logo: figma,
			title: 'FIGMA',
			price: 'Free',
			paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			liked: notliked,
			isliked: false,
			href: '#!',
		},
		{
			logo: sketch,
			title: 'Sketch',
			price: 'Trial & Paid',
			paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			liked: notliked,
			isliked: false,
			href: '#!',
		},
		{
			logo: vscode,
			title: 'Visual Studio Code',
			price: 'Free',
			paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			liked: notliked,
			isliked: false,
			href: '#!',
		},
		{
			logo: notion,
			title: 'Notion',
			price: 'Free & Paid',
			paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			liked: notliked,
			isliked: false,
			href: '#!',
		},
		{
			logo: slack,
			title: 'Slack',
			price: 'Free & Paid',
			paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			liked: notliked,
			isliked: false,
			href: '#!',
		},
		{
			logo: invision,
			title: 'Invision',
			price: 'Free & Paid',
			paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			liked: notliked,
			isliked: false,
			href: '#!',
		},
		{
			logo: zeplin,
			title: 'Zeplin',
			price: 'Free & Paid',
			paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			liked: notliked,
			isliked: false,
			href: '#!',
		},
		{
			logo: phpstorm,
			title: 'PHPStorm',
			price: 'Free',
			paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			liked: notliked,
			isliked: false,
			href: '#!',
		},
		{
			logo: toolbox,
			title: 'Toolbox',
			price: 'Free',
			paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			liked: notliked,
			isliked: false,
			href: '#!',
		},
		{
			logo: procreate,
			title: 'Procreate',
			price: 'Paid',
			paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			liked: notliked,
			isliked: false,
			href: '#!',
		},
	])

	return (
		<>
			<Header />
			<Welcome />
			<Popular data={data} AddFavourite={AddFavourite} />
			<Brands />
			<NewTools data={data} AddFavourite={AddFavourite} />
			<Slider sliders={sliders}/>
		</>
	)

	function AddFavourite(appCard) {
		if (appCard.isliked === false) {
			SetFavourites([...favourites, appCard])
			let object = data[data.indexOf(appCard)]
			object.liked = liked
			object.isliked = true
			let new_data = data
			new_data[data.indexOf(appCard)] = object
			SetData(new_data)			
		} else if (appCard.isliked === true) {
			const new_favourites = favourites.filter(card => {
				return card !== appCard
			})
			SetFavourites(new_favourites)
			let object = data[data.indexOf(appCard)]
			object.liked = notliked
			object.isliked = false
			let new_data = data
			new_data[data.indexOf(appCard)] = object
			SetData(new_data)
		}
	}
	// function NextSlide () {
	//   SetPosition(position-850)
	//   SetStyleS({transform : `translateX(${position}px)`})

	//   console.log(position)
	//   console.log(styleS)
	// }
}

export default App
