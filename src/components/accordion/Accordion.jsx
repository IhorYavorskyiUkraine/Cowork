import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';

import img from "/images/accordion/btn.png"

import './Accordion.scss';

const AccordionComponent = () => {
	return (
		<Accordion 
			allowZeroExpanded 
			preExpanded={['a']} 
			className="accordion">
			<AccordionItem uuid="a" className="accordion__item">
				<AccordionItemHeading className="accordion__heading">
					<AccordionItemButton  className="accordion__button"><span>How flexible are Cowork's membership plans?</span><img src={img} alt=""/></AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="accordion__panel text">
					<p>
					Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.
					</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem className="accordion__item">
				<AccordionItemHeading className="accordion__heading">
					<AccordionItemButton className="accordion__button"><span>What kind of events and networking opportunities does Cowork provide?</span><img src={img} alt=""/></AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="accordion__panel text">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas, possimus dicta, nemo ut non vero maiores iste hic quas illo, velit nisi vel quisquam maxime magnam totam iusto eligendi?
					</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem className="accordion__item">
				<AccordionItemHeading className="accordion__heading">
					<AccordionItemButton className="accordion__button"><span>Can I tour the Cowork space before committing to a membership?</span><img src={img} alt=""/></AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="accordion__panel text">
					<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas, possimus dicta, nemo ut non vero maiores iste hic quas illo, velit nisi vel quisquam maxime magnam totam iusto eligendi?
					</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem className="accordion__item">
				<AccordionItemHeading className="accordion__heading">
					<AccordionItemButton className="accordion__button"><span>Is Cowork suitable for remote teams and distributed workforces?</span><img src={img} alt=""/></AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="accordion__panel text">
					<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas, possimus dicta, nemo ut non vero maiores iste hic quas illo, velit nisi vel quisquam maxime magnam totam iusto eligendi?
					</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem className="accordion__item">
				<AccordionItemHeading className="accordion__heading">
					<AccordionItemButton className="accordion__button"><span>What measures does Cowork take for environmental sustainability?</span><img src={img} alt=""/></AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="accordion__panel text">
					<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas, possimus dicta, nemo ut non vero maiores iste hic quas illo, velit nisi vel quisquam maxime magnam totam iusto eligendi?
					</p>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem className="accordion__item">
				<AccordionItemHeading className="accordion__heading">
					<AccordionItemButton className="accordion__button"><span>Still has questions?</span><img src={img} alt=""/></AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="accordion__panel text">
					<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas, possimus dicta, nemo ut non vero maiores iste hic quas illo, velit nisi vel quisquam maxime magnam totam iusto eligendi?
					</p>
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion>
	);
}

export default AccordionComponent;