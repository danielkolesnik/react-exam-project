
// outsource dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

// local dependencies
import './stylesheet.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faKey, faQuestion, faCog, faDoorOpen, faDoorClosed } from '@fortawesome/free-solid-svg-icons';

library.add( faHome, faQuestion, faKey, faCog, faDoorClosed, faDoorOpen );