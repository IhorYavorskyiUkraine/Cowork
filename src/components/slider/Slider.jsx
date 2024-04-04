import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

import { useState, useEffect } from "react";
import { serverData } from "../../../server/db.js"

import './Slider.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
	const [data, setData] = useState([]);

	const renderItems = () => {
		const items = data.map(item => {
			return(
				<SwiperSlide key={item.id}>
					<li
						key={item. id} 
						className="hearClients__item hearClients-item"
						>
						<div className="hearClients-item__wrapper">
							<div className="hearClients-item__image">
								<img src={`${item.image}`} alt="why choose item"/>
							</div>
							<p className="hearClients-item__text">{item.text}</p>
							<h3 className="hearClients-item__name">{item.name}</h3>
							<p className="hearClients-item__position">{item.position}</p>
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
		navigation
    >
		{renderItems()}
    </Swiper>
  );
};

export default Slider;