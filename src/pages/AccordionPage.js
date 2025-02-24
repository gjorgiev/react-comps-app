import Accordion from "../components/Accordion";

export default function AccordionPage() {
  const items = [
    {
      id: 'lskdfj123',
      label: 'Can I use React ona a project?',
      content: 'Yes, you can use React on any project. It is a JavaScript library for building user interfaces.'
    },
    {
      id: 'sdfjkl123',
      label: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook.'
    },
    {
      id: 'sdfxcv213',
      label: 'What is your favorite framework?',
      content: 'My favorite framework is React. It is a JavaScript library for building user interfaces.'
    }
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}