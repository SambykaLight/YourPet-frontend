import { useState } from 'react';
import { FaPaw } from 'react-icons/fa';
import cn from 'classnames';
import { Container, Button, Action, Toolip } from './FAB.styled';
import { useNavigate } from 'react-router-dom';

export const FAB = ({ actions }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const mouseEnter = () => setOpen(true);

  const mouseLeave = () => setOpen(false);
  return (
    <Container onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <Button>
        <FaPaw />
      </Button>
      {actions.map((action, index) => (
        <Action
          style={{ transitionDelay: `${index * 35}ms` }}
          className={cn({ open })}
          key={action.label}
          onClick={() => {
            if (action.isExternal) {
              window.open(action.url, '_blank');
            } else {
              navigate(action.url);
            }
          }}
        >
          {action.icon}
          <Toolip>{action.label}</Toolip>
        </Action>
      ))}
    </Container>
  );
};
