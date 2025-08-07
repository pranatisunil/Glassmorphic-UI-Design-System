import Card from '../components/Card/Card';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  children: 'This is the content of the card',
};

export const Clickable = Template.bind({});
Clickable.args = {
  title: 'Clickable Card',
  children: 'Click me!',
  onClick: () => alert('Card clicked!'),
};
