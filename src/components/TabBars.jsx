import React from 'react';
import ReactDOM from 'react-dom';
import { Tabbar, Tab, Page } from 'react-onsenui';
import JobPage from '../pages/JobPage';
import InvoicePage from '../pages/InvoicePage';
import SettingsPage from '../pages/SettingsPage';

export default class TabBars extends React.Component {
    renderTabs() {
        const sections = [
            {
                key: 'Jobs',
                component: (<JobPage key='Jobs' title='Jobs' navigator={this.props.navigator} />),
                icon: 'md-calendar'
            },
            {
                key: 'Invoices',
                component: (<InvoicePage key='Invoices' title='Invoices' navigator={this.props.navigator} />),
                icon: 'md-receipt'
            },
            {
                key: 'Settings',
                component: (<SettingsPage key='Settings' title='Settings' navigator={this.props.navigator} />),
                icon: 'md-settings'
            }
        ];

        return sections.map((section) => {
            return {
                content: section.component,
                tab: <Tab key={section.key} label={section.key} icon={section.icon} />
            };
        });
    }

    render() {
        return (
            <Page>
                <Tabbar initialIndex={0} renderTabs={this.renderTabs.bind(this)} />
            </Page>
        );
    }
}

