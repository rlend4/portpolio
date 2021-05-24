import React from 'react';
import './TextForm.css';

const TextForm = ({ pageName, contents }) => {

    const getContents = () => {
        return (
            <div>
                {contents.map((content, index) => (
                    <div key={index} className="content-wrapper">
                        <div className="content-title">{content.title}</div>
                        {content.titleDesc && content.titleDesc !== '' && 
                        <div className="content-title-desc">{content.titleDesc}</div>}
                        <table className="content-table-wrapper">
                            <tbody>
                                <tr>
                                    <td className="content-desc">
                                        <div>
                                            <span className="content-desc-title">{content.descTitle}</span>
                                            {
                                                content.descTexts && content.descTexts.length > 0 &&
                                                content.descTexts.map((descText, dIndex) => (
                                                    <li key ={dIndex}>{descText}</li>
                                                ))
                                            }
                                        </div>
                                        {   content.link && content.link !== '' &&
                                            <div>
                                                <span className="content-desc-title">Link</span>
                                                <li><a href={content.link} target="_blank">{content.link}</a></li>
                                                {
                                                    content.linkDesc && content.linkDesc !== '' &&
                                                    <li>{content.linkDesc}</li>
                                                }
                                            </div>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            <div className="page-name-wrapper">{ pageName }</div>
            <hr />
            {contents && contents.length > 0 && getContents()}
        </div>
    );
};

export default TextForm;