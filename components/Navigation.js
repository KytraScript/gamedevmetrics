import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse, Button, Tooltip
} from 'shards-react';

export default class NavExample extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleRoles = this.toggleRoles.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggle = this.toggle.bind(this);
        this.firstCapital = this.firstCapital.bind(this);

        this.state = {
            dropdownOpen: false,
            rolesOpen: false,
            collapseOpen: false,
            open: false,
            left: false,
        };
    }

    firstCapital(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    toggleDropdown() {
        this.setState({
            ...this.state,
            ...{
                dropdownOpen: !this.state.dropdownOpen
            }
        });
    }

    toggleRoles() {
        this.setState({
            ...this.state,
            ...{
                rolesOpen: !this.state.rolesOpen
            }
        });
    }

    toggleNavbar() {
        this.setState({
            ...this.state,
            ...{
                collapseOpen: !this.state.collapseOpen
            }
        });
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {

        let rolesList = this.props.dataResults || [];

        return (
            <Navbar type="dark" theme="dark" expand="md" style={{marginBottom: '12px'}}>
                <NavbarBrand href="#">Game Dev Metrics</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar}/>
                <Collapse open={this.state.collapseOpen} navbar>
                    <Nav navbar>

                        { /* NAVI LOGIN DROPDOWN MENU */ }
                        <Dropdown
                            open={this.state.dropdownOpen}
                            toggle={this.toggleDropdown}
                        >
                            <Button id={'navi'} theme={'dark'}
                                    style={{padding: '2px', borderTopRightRadius: 0, borderBottomRightRadius: 0, border: '1px solid #212529', marginLeft: '10px'}}>
                                <Tooltip className={'navi-tooltip'}
                                         placement="left"
                                         open={this.state.open}
                                         target="#navi"
                                         toggle={this.toggle}
                                >
                                    Hey! <span className={'navi-blue'}><i>Listen!!</i></span>
                                </Tooltip>
                                <img alt={'navigation sprite'} src={'../navi.png'} style={{position: 'relative', height: '48px', width: 'auto'}}/>
                            </Button>
                            <DropdownToggle split size={'lg'} theme={'dark'} style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}/>
                            <DropdownMenu right>
                                <DropdownItem>Login</DropdownItem>
                                <DropdownItem>Register</DropdownItem>
                                <DropdownItem>About</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        { /* CREATOR ROLES DROPDOWN BUTTON */ }
                        <Dropdown
                            open={this.state.rolesOpen}
                            toggle={this.toggleRoles}
                        >
                            <DropdownToggle theme="dark" size={'lg'} style={{ marginLeft: '8px', fontFamily: 'Poppins' }}>Creator Roles</DropdownToggle>
                            <DropdownMenu right persist={true}>
                                { rolesList
                                    .map((e, index) => <DropdownItem key={index}>
                                        {this.firstCapital(e.name)}</DropdownItem> )}
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>

                    { /* SEARCH BAR MAYBE */ }
                    {/*<Nav navbar className="ml-auto">
                        <InputGroup size="sm" seamless>
                            <InputGroupAddon type="prepend">
                                <InputGroupText>
                                    There was an icon here at one point
                                </InputGroupText>
                            </InputGroupAddon>
                            <FormInput className="border-0" placeholder="Search..."/>
                        </InputGroup>
                    </Nav>*/}

                </Collapse>
            </Navbar>
        );
    }
}
