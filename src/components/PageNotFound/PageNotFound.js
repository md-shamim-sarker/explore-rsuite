import React from 'react';
import {Button, ButtonToolbar} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const PageNotFound = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <ButtonToolbar>
                <Button appearance="default">Default</Button>
                <Button appearance="primary">Primary</Button>
                <Button appearance="link">Link</Button>
                <Button appearance="subtle">Subtle</Button>
                <Button appearance="ghost">Ghost</Button>
            </ButtonToolbar>
            <ButtonToolbar>
                <Button color="red" appearance="primary">
                    Red
                </Button>
                <Button color="orange" appearance="primary">
                    Orange
                </Button>
                <Button color="yellow" appearance="primary">
                    Yellow
                </Button>
                <Button color="green" appearance="primary">
                    Green
                </Button>
                <Button color="cyan" appearance="primary">
                    Cyan
                </Button>
                <Button color="blue" appearance="primary">
                    Blue
                </Button>
                <Button color="violet" appearance="primary">
                    Violet
                </Button>
            </ButtonToolbar>

            <ButtonToolbar>
                <Button color="red" appearance="subtle">
                    Red
                </Button>
                <Button color="orange" appearance="subtle">
                    Orange
                </Button>
                <Button color="yellow" appearance="subtle">
                    Yellow
                </Button>
                <Button color="green" appearance="subtle">
                    Green
                </Button>
                <Button color="cyan" appearance="subtle">
                    Cyan
                </Button>
                <Button color="blue" appearance="subtle">
                    Blue
                </Button>
                <Button color="violet" appearance="subtle">
                    Violet
                </Button>
            </ButtonToolbar>

            <ButtonToolbar style={{background: '#000', padding: 10}}>
                <Button color="red" appearance="ghost">
                    Red
                </Button>
                <Button color="orange" appearance="ghost">
                    Orange
                </Button>
                <Button color="yellow" appearance="ghost">
                    Yellow
                </Button>
                <Button color="green" appearance="ghost">
                    Green
                </Button>
                <Button color="cyan" appearance="ghost">
                    Cyan
                </Button>
                <Button color="blue" appearance="ghost">
                    Blue
                </Button>
                <Button color="violet" appearance="ghost">
                    Violet
                </Button>
            </ButtonToolbar>
        </div >
    );
};

export default PageNotFound;