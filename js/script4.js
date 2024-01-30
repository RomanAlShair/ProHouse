var originalSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="#C3C5CE"> <path d="M14.4112 4.13288C16.924 3.82435 19.2143 5.64212 19.5698 8.53704C20.2807 14.3269 14.4835 18.3971 12.568 19.8916C10.3479 18.9049 3.73822 16.3581 3.02732 10.5682C2.67186 7.67327 4.48577 5.35157 6.96714 5.0469C8.50559 4.858 9.96362 5.51857 10.8923 6.24413C11.6179 5.31545 12.8728 4.32178 14.4112 4.13288ZM13.0464 17.4014C13.7187 16.8521 14.3201 16.314 14.8753 15.7487C17.1003 13.4857 18.2144 11.1744 17.9155 8.74016C17.6758 6.78815 16.238 5.58777 14.6144 5.78712C13.7244 5.8964 12.8195 6.48607 12.2055 7.27008L11.1795 8.58323L9.86636 7.55729C9.0809 6.94511 8.06024 6.59187 7.17025 6.70114C5.56564 6.89817 4.44351 8.42631 4.68156 10.3651C4.98055 12.8001 6.62146 14.7724 9.32615 16.4301C10.0025 16.8441 10.7162 17.2207 11.5013 17.5903C11.7678 17.7163 12.031 17.8359 12.3319 17.9686C12.5918 17.7671 12.8182 17.5873 13.0464 17.4014Z" fill="#C3C5CE"/> </svg>'; 

var newSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="#C3C5CE"><path d="M14.4112 4.13288C16.924 3.82435 19.2143 5.64212 19.5698 8.53704C20.2807 14.3269 14.4835 18.3971 12.568 19.8916C10.3479 18.9049 3.73822 16.3581 3.02732 10.5682C2.67186 7.67327 4.48577 5.35157 6.96714 5.0469C8.50559 4.858 9.96362 5.51857 10.8923 6.24413C11.6179 5.31545 12.8728 4.32178 14.4112 4.13288C13.0464 17.4014C13.7187 16.8521 14.3201 16.314 14.8753 15.7487C17.1003 13.4857 18.2144 11.1744 17.9155 8.74016C17.6758 6.78815 16.238 5.58777 14.6144 5.78712C13.7244 5.8964 12.8195 6.48607 12.2055 7.27008L11.1795 8.58323L9.86636 7.55729C9.0809 6.94511 8.06024 6.59187 7.17025 6.70114C5.56564 6.89817 4.44351 8.42631 4.68156 10.3651C4.98055 12.8001 6.62146 14.7724 9.32615 16.4301C10.0025 16.8441 10.7162 17.2207 11.5013 17.5903C11.7678 17.7163 12.031 17.8359 12.3319 17.9686C12.5918 17.7671 12.8182 17.5873 13.0464 17.4014Z" fill="red"/></svg>'; 

var isOriginal = true; 

document.getElementById('heartt').addEventListener('click', function() { 
    if (isOriginal) { 
        document.getElementById('heartt').innerHTML = newSvg; 
        isOriginal = false; 
    } else { 
        document.getElementById('heartt').innerHTML = originalSvg; 
        isOriginal = true; 
    } 
}); 