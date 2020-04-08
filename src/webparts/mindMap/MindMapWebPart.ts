import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  PropertyPaneDropdownOptionType
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'MindMapWebPartStrings';
import MindMap from './components/MindMap';
import { IMindMapProps } from './components/IMindMapProps';

export interface IMindMapWebPartProps {
  theme: string;
}

export default class MindMapWebPart extends BaseClientSideWebPart<IMindMapWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMindMapProps> = React.createElement(
      MindMap,
      {
        theme: this.properties.theme
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneDropdown('theme', {
                  label: strings.ThemeFieldLabel,
                  options: [
                    { key: "office", text: "Office" },
                    { key: "primary", text: "Primary" },
                    { key: "warning", text: "Warning" },
                    { key: "danger", text: "Danger" },
                    { key: "success", text: "Success" },
                    { key: "info", text: "Info" },
                    { key: "greensea", text: "Greensea" },
                    { key: "nephrite", text: "Nephrite" },
                    { key: "belizehole", text: "Belizehole" },
                    { key: "wisteria", text: "Wisteria" },
                    { key: "asphalt", text: "Asphalt" },
                    { key: "orange", text: "Orange" },
                    { key: "pumpkin", text: "Pumpkin" },
                    { key: "pomegranate", text: "Pomegranate" },
                    { key: "clouds", text: "Clouds" },
                    { key: "asbestos", text: "Asbestos" }
                  ],
                  selectedKey: this.properties.theme
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
