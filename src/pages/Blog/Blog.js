import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            {/* answer of first question  */}
            <div className='p-3 m-5 border'>
                <h5 className='text-center mb-3'>Difference between authorization and authentication?</h5>
                <table id="customers">
                    <tr>
                        <th className='text-center'>Authentication</th>
                        <th className='text-center'>Authorization</th>
                    </tr>
                    <tr>
                        <td>In Authentication process, system will check the user identity.</td>
                        <td>In this process, user will checked for accessing the resources</td>
                    </tr>
                    <tr>
                        <td>On this process user will be verified.</td>
                        <td>While in this process, user are validated.</td>
                    </tr>
                    <tr>
                        <td>It's the pre-process of authorization.</td>
                        <td>This process is done after authentication.</td>
                    </tr>
                    <tr>
                        <td>Authenticatin is visible and changable by user.</td>
                        <td>Authorization isn't visible and changable by user.</td>
                    </tr>
                    <tr>
                        <td>Authentication determaines that the person is user or not.</td>
                        <td>Authorization determines what permissin do user have.</td>
                    </tr>
                </table>
            </div>
            {/* answer of second question  */}
            <div className='p-3 m-5 border'>
                <h5 className='text-center'>Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p className=''>There are some reasons that why I really love to use firebase. Firebase is a backend-service platform by <span className=''>Google</span>. That provides us functionalities and help with the backend development of Anroid, ios, Web and etc. It's a open source service by Google that's why we don't need to pay for use this. We can use some customize firebase hooks that's really usefull and handy, that's save our times. One another thigs is that, although firebase is a Google service that's why we don't need to warry about the security of this.</p>
                <p>There are some other alternatives of Google firebase. They are</p>
                <ul>
                    <li>Parse</li>
                    <li>Back4App</li>
                    <li>AWS Amplify</li>
                    <li>Kuzzle</li>
                    <li>Couchbase</li>
                    <li>Native Script</li>
                    <li>RXDB, etc</li>
                </ul>
            </div>
            {/* answer of third question */}
            <div className='p-3 m-5 border'>
                <h5 className='text-center'>What other services does firebase provide other than authentication?</h5>
                <p>Firebase provide us some other services. Those are</p>
                <ul>
                    <li>Realtime Database</li>
                    <li>Remote Config</li>
                    <li>Firebase ML</li>
                    <li>Cloud Functions</li>
                    <li>Cloud Messaging</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;