function DevTools() {
    return (
        <div className={"languages-and-tools"}>
            <h2>
                Development Tools
            </h2>
            <DevToolsContainer>
                <div className={"flex-vertical lang-tool"} title="Git and GitHub">
                    <svg fill="#FFFFFF" width="10vw" height="8.5vw" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.428 14.663l-13.095-13.094c-0.35-0.349-0.833-0.565-1.367-0.565s-1.017 0.216-1.367 0.565l0-0-2.713 2.718 3.449 3.449c0.22-0.077 0.473-0.121 0.737-0.121 1.269 0 2.297 1.028 2.297 2.297 0 0.269-0.046 0.526-0.131 0.766l0.005-0.016 3.322 3.324c0.222-0.079 0.479-0.125 0.746-0.125 1.268 0 2.296 1.028 2.296 2.296s-1.028 2.296-2.296 2.296c-1.268 0-2.296-1.028-2.296-2.296 0-0.313 0.063-0.611 0.176-0.883l-0.006 0.015-3.11-3.094v8.154c0.764 0.385 1.279 1.163 1.279 2.061 0 1.27-1.030 2.3-2.3 2.3s-2.3-1.030-2.3-2.3c0-0.634 0.256-1.207 0.671-1.623l-0 0c0.211-0.211 0.462-0.382 0.741-0.502l0.015-0.006v-8.234c-0.842-0.354-1.422-1.173-1.422-2.126 0-0.32 0.065-0.624 0.183-0.901l-0.006 0.015-3.389-3.405-8.98 8.974c-0.348 0.351-0.562 0.834-0.562 1.368s0.215 1.017 0.563 1.368l13.096 13.092c0.349 0.35 0.832 0.566 1.366 0.566s1.016-0.216 1.366-0.566l13.034-13.034c0.35-0.349 0.567-0.833 0.567-1.366s-0.217-1.017-0.567-1.366l-0-0z"></path>
                    </svg>
                    Git
                </div>
                <div className={"flex-vertical lang-tool"} title="Visual Studio">
                    <svg fill="#FFFFFF" width="10vw" height="8.5vw" viewBox="-0.5 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m17.858 23.998-9.771-9.484-5.866 4.465-2.221-1.115v-11.719l2.234-1.121 5.87 4.469 9.747-9.493 5.587 2.239v19.531l-5.579 2.23zm-.563-16.186-5.577 4.173 5.58 4.202zm-14.507 1.685v5.016l2.787-2.525z"/></svg>
                    Visual Studio
                </div>
                <div className={"flex-vertical lang-tool"} title="JetBrains IDEs">
                    <svg fill="#FFFFFF" width="10vw" height="8.5vw" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h32v32h-32zM2.803 28h12v-2h-12zM4.401 9.197h0.401c0.932-0.129 1.599-0.932 1.599-2v-3.197h-1.469v3.333c0 0.531-0.129 0.667-0.531 0.667s-0.667-0.136-0.803-0.401l-0.932 0.803c0.401 0.667 1.068 0.932 1.735 0.796zM11.068 9.197v-1.197h-2.803v-0.803h2.401v-1.197h-2.401v-0.803h2.803v-1.197h-4.265v5.333h4.265zM12.803 9.197h1.463v-4h1.599v-1.197h-4.531v1.197h1.599v4zM7.469 14.265c0-0.667-0.401-1.197-1.068-1.197 0.531-0.136 0.796-0.667 0.796-1.204 0-0.265-0.129-0.667-0.265-0.932-0.401-0.401-0.932-0.531-1.463-0.531h-2.667v5.197h2.667c1.197 0 2-0.531 2-1.333zM4.136 11.599h0.932c0.401 0 0.667 0.136 0.667 0.401 0 0.401-0.265 0.531-0.667 0.531h-0.932zM4.136 14.401v-0.932h1.061c0.537 0 0.803 0.129 0.667 0.395 0 0.272-0.265 0.537-0.667 0.537zM14 10.401l-2 4.667-0.803-1.204c0.667-0.265 1.068-0.932 1.068-1.599 0-0.401-0.129-0.932-0.401-1.197-0.531-0.537-1.197-0.667-1.728-0.667h-2.537v5.197h1.469v-1.599h0.667l1.068 1.599h2.395l0.401-0.932h2l0.401 0.932h1.599l-2.129-5.333h-1.469zM10 12.932h-0.932v-1.197h0.932c0.401 0 0.803 0.129 0.803 0.667 0 0.265-0.272 0.531-0.803 0.531zM15.197 13.599h-1.061l0.531-1.463zM17.735 15.599h1.463v-5.197h-1.463zM23.068 13.197l-2.136-2.796h-1.333v5.197h1.469v-2.796l2.265 2.932h1.197v-5.333h-1.463zM27.197 12.401c-0.667-0.136-0.932-0.265-0.932-0.537 0-0.129 0.136-0.265 0.537-0.265 0.531 0 1.061 0.265 1.463 0.537l0.803-1.068c-0.667-0.537-1.333-0.667-2.136-0.667-1.197 0-2 0.796-2 1.735 0 1.061 0.803 1.333 2 1.599 0.667 0.129 0.932 0.265 0.932 0.531s-0.265 0.401-0.667 0.401c-0.667 0-1.197-0.265-1.728-0.667l-0.803 0.932c0.667 0.537 1.599 0.803 2.401 0.803 1.333 0 2.129-0.667 2.129-1.735 0-0.932-0.796-1.333-2-1.599z"/>
                    </svg>
                    JetBrains IDEs
                </div>
                <div className={"flex-vertical lang-tool"} title="Unreal Engine">
                    <svg fill="#FFFFFF" width="10vw" height="8.5vw" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm0 1.846c5.595.007 10.128 4.545 10.128 10.141 0 5.601-4.54 10.141-10.141 10.141s-10.141-4.54-10.141-10.141c0-2.8 1.135-5.335 2.97-7.17 1.837-1.835 4.374-2.97 7.176-2.97h.007zm0 2.77c-4.392.774-8.308 4.824-8.308 9.23 2.149-3.794 3.584-4.067 3.981-4.067s.606.206.606.663v5.654c0 .703-1.366.588-1.818.519 1.67 2.485 5.539 2.77 5.539 2.77l1.846-1.846 1.846.923c2.914-1.334 4.615-4.19 4.615-4.615-.701.868-1.646 1.515-2.731 1.836l-.039.01c-.245 0-.923-.126-.923-.462v-6.693c0-.581 1.342-2.354 1.846-3-3.332.873-4.298 2.394-4.298 2.394s-.253-.548-1.24-.548c.501.473.838 1.114.922 1.832l.001.014v5.654c-.525.373-1.144.653-1.813.801l-.034.006c-.64 0-.952-.26-.952-.75s.029-6.634.029-6.634-.923.339-.923-1.558c0-.949 1.846-2.135 1.846-2.135z"/></svg>
                    Unreal Engine
                </div>
                <div className={"flex-vertical lang-tool"} title="Unity">
                    <svg fill="#FFFFFF" width="10vw" height="8.5vw" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                        <path d="M 40.449219 3 C 40.359375 2.996094 40.265625 3.007813 40.175781 3.03125 L 23.765625 7.03125 C 23.449219 7.105469 23.191406 7.328125 23.074219 7.628906 L 21.324219 12 L 16 12 C 15.722656 12 15.453125 12.117188 15.265625 12.324219 L 3.265625 25.324219 C 2.894531 25.722656 2.914063 26.347656 3.3125 26.722656 L 15.890625 38.722656 C 16.078125 38.902344 16.324219 39 16.582031 39 L 22.324219 39 L 24.074219 43.371094 C 24.199219 43.695313 24.488281 43.925781 24.828125 43.984375 L 42.289063 46.984375 C 42.816406 47.078125 43.320313 46.734375 43.4375 46.214844 L 46.976563 29.984375 C 47.03125 29.734375 46.988281 29.46875 46.855469 29.25 L 44.527344 25.429688 L 46.902344 20.429688 C 47.015625 20.191406 47.03125 19.917969 46.941406 19.671875 L 41.359375 3.671875 C 41.222656 3.28125 40.859375 3.015625 40.449219 3 Z M 39.769531 5.1875 L 44.921875 19.941406 L 43.445313 23.046875 L 39.953125 11.703125 C 39.824219 11.277344 39.421875 10.988281 38.972656 11 C 38.605469 11.011719 38.269531 11.222656 38.105469 11.550781 L 31.105469 25.550781 C 30.945313 25.871094 30.96875 26.25 31.164063 26.546875 L 39.164063 38.757813 C 39.382813 39.09375 39.785156 39.261719 40.179688 39.191406 C 40.570313 39.121094 40.886719 38.820313 40.972656 38.429688 L 43.453125 27.515625 L 44.9375 29.949219 L 41.6875 44.851563 L 25.71875 42.109375 L 24.601563 39.3125 L 36.183594 41.464844 C 36.578125 41.535156 36.980469 41.367188 37.199219 41.03125 C 37.421875 40.691406 37.421875 40.257813 37.195313 39.921875 L 28.828125 27.441406 C 28.644531 27.167969 28.332031 27 28 27 L 12 27 C 11.585938 27 11.214844 27.253906 11.066406 27.640625 C 10.917969 28.023438 11.023438 28.460938 11.328125 28.738281 L 20.414063 37 L 16.984375 37 L 5.402344 25.953125 L 16.4375 14 L 19.738281 14 L 11.261719 23.328125 C 10.992188 23.621094 10.925781 24.042969 11.085938 24.40625 C 11.246094 24.765625 11.605469 25 12 25 L 28 25 C 28.378906 25 28.726563 24.785156 28.894531 24.449219 L 35.894531 10.449219 C 36.046875 10.140625 36.035156 9.78125 35.859375 9.488281 C 35.683594 9.195313 35.375 9.011719 35.03125 9 C 34.945313 8.996094 34.859375 9.003906 34.777344 9.023438 L 23.640625 11.59375 L 24.734375 8.851563 Z M 33.15625 11.453125 L 27.382813 23 L 14.261719 23 L 22.53125 13.90625 Z M 38.78125 14.679688 L 41.964844 25.039063 L 39.546875 35.691406 L 33.152344 25.933594 Z M 14.585938 29 L 27.46875 29 L 34.210938 39.0625 L 23.464844 37.066406 Z"></path>
                    </svg>
                    Unity
                </div>
            </DevToolsContainer>
            <DevToolsContainer>
                <div className={"flex-vertical lang-tool"} title="Jira">
                    <svg fill="#FFFFFF" width="10vw" height="8.5vw" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 44.343 46">
                        <path d="M 22.15625 0 A 1.0001 1.0001 0 0 0 21.464844 0.29296875 L 21.445312 0.3125 L 0.87890625 20.878906 C -0.28429206 22.042104 -0.28429206 23.957896 0.87890625 25.121094 L 21.464844 45.707031 A 1.0001 1.0001 0 0 0 22.878906 45.707031 L 22.898438 45.6875 L 43.464844 25.121094 C 44.628041 23.957896 44.628041 22.042104 43.464844 20.878906 L 22.878906 0.29296875 A 1.0001 1.0001 0 0 0 22.15625 0 z M 22.234375 2.4765625 L 42.050781 22.292969 C 42.449681 22.691868 42.449681 23.308132 42.050781 23.707031 L 25.933594 39.824219 C 26.052442 39.242277 26.138227 38.651984 26.169922 38.052734 A 1.0001 1.0001 0 0 0 26.169922 37.947266 C 26.036349 35.421796 25.108902 33.01145 23.537109 31.050781 L 30.878906 23.707031 A 1.0001 1.0001 0 0 0 30.878906 22.292969 L 22.898438 14.3125 C 21.275291 12.594247 20.319287 10.358489 20.181641 8 C 20.299146 5.9866151 21.018169 4.0654641 22.234375 2.4765625 z M 18.410156 6.1757812 C 18.291308 6.7577229 18.205523 7.3480156 18.173828 7.9472656 A 1.0001 1.0001 0 0 0 18.173828 8.0527344 C 18.307423 10.578631 19.236316 12.988371 20.808594 14.949219 L 13.464844 22.292969 A 1.0001 1.0001 0 0 0 13.464844 23.707031 L 21.464844 31.708984 C 23.075846 33.424403 24.02503 35.651211 24.162109 38 C 24.044604 40.013385 23.325581 41.934536 22.109375 43.523438 L 2.2929688 23.707031 C 1.8940686 23.308131 1.8940686 22.691869 2.2929688 22.292969 L 18.410156 6.1757812 z M 22.171875 16.414062 L 28.757812 23 L 22.171875 29.585938 L 15.585938 23 L 22.171875 16.414062 z"></path>
                    </svg>
                    Jira
                </div>
            </DevToolsContainer>
        </div>
    )
}

function DevToolsContainer(props) {
    return (
        <div className={"container"}>
            {props.children}
        </div>
    )
}

export default DevTools