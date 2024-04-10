import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

import { useState, useEffect } from "react";
import { serverData } from "../../../server/db.js"

import prev from "/images/slider/1.png"
import next from "/images/slider/1.png"

import './Slider.scss'
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
	const [data, setData] = useState([]);

	const renderItems = () => {
		const items = data.map(item => {
			return(
				<SwiperSlide key={item.id}>
					<li
						key={item. id} 
						className="slider__item slider-item"
						style={{background: `${item.style}`}}
						>
						<div className="slider-item__wrapper">
							<div className="slider-item__image">
								<img src={`${item.image}`} alt="why choose item"/>
							</div>
							<p className="slider-item__text">{item.text}</p>
							<h3 className="slider-item__name">{item.name}</h3>
							<p className="slider-item__position">{item.position}</p>
						</div>
					</li>
				</SwiperSlide>
			)
		})
		return items;
	}

	useEffect(() => {
		setData(serverData[0].hearClients);
	}, []);

  return (
    <Swiper
	 	modules={[Navigation]}
      spaceBetween={0}
		slidesPerView={1}
		navigation={{
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}}
    >
		{renderItems()}
		<div className="swiper-button-prev">
			<img src={prev} alt="prev"/>
		</div>
		<div className="swiper-button-next">
			<img src={next} alt="next"/>
		</div>
    </Swiper>
  );
};

export default Slider;