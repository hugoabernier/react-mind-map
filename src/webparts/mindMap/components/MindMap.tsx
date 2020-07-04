import * as React from 'react';
import styles from './MindMap.module.scss';
import { IMindMapProps } from './IMindMapProps';

import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';


import * as strings from 'MindMapWebPartStrings';

export default class MindMap extends React.Component<IMindMapProps, {}> {

  public render(): React.ReactElement<IMindMapProps> {

    return (
      <div className={styles.mindMap}>


        <ul id="port" style={{ width: '2050px', height: '1390px', zoom: 0.7 }}>
          <li className="item shape-ellipse current" style={{ height: '79px', width: '249px', left: '546px', top: '480px' }}>
            <canvas width="249" height="79"></canvas>
            <div className="content" style={{ left: '0px', top: '0px', borderColor: 'rgb(153, 153, 153)' }}>
              <span className="status" style={{ display: 'none' }}></span>
              <span className="value" style={{ display: 'none' }}></span>
              <span className="icon" style={{ display: 'none' }}></span>
              <div className="text">My Mind<br />Features</div>
            </div>
          </li>
        </ul>
        <div className="toggle"></div>
        <ul className="children">
          <li className="item shape-box current" style={{ width: '111px', height: '35px', top: '22px', left: '138px' }}>
            <canvas width="111" height="35"></canvas>
            <div className="content" style={{ top: '0px', left: '0px', borderColor: 'rgb(153, 153, 153)' }}>
              <span className="status" style={{ display: 'none' }}></span>
              <span className="value" style={{ display: 'none' }}></span>
              <span className="icon" style={{ display: 'none' }}></span>
              <div className="text">This is a test</div>
            </div>
          </li>
        </ul>
      </div>

    );
  }
}
