import React from "react";
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
    Collapse, Button
} from 'shards-react';

export default class NavExample extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            dropdownOpen: false,
            collapseOpen: false
        };
    }

    toggleDropdown() {
        this.setState({
            ...this.state,
            ...{
                dropdownOpen: !this.state.dropdownOpen
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

    render() {
        return (
            <Navbar type="dark" theme="dark" expand="md" style={{ marginBottom: '12px' }}>
                <NavbarBrand href="#">Game Dev Metrics</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar}/>
                <Collapse open={this.state.collapseOpen} navbar>
                    <Nav navbar>
                        <Dropdown
                            open={this.state.dropdownOpen}
                            toggle={this.toggleDropdown}
                        >
                            <Button theme={'dark'} style={{ padding: '2px', borderTopRightRadius: 0, borderBottomRightRadius: 0, border: '1px solid #212529' }}>
                                <img alt={'navigation sprite'} src={'../navi.png'} style={{ position: 'relative', height: '48px', width: 'auto' }}/>
                            </Button>
                            <DropdownToggle split size={'lg'} theme={'dark'} style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}/>
                            <DropdownMenu right>
                                <DropdownItem>Login</DropdownItem>
                                <DropdownItem>Register</DropdownItem>
                                <DropdownItem>About</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>

                    <Nav navbar className="ml-auto">
                        {/*<InputGroup size="sm" seamless>
                            <InputGroupAddon type="prepend">
                                <InputGroupText>
                                     There was an icon here at one point
                                </InputGroupText>
                            </InputGroupAddon>
                            <FormInput className="border-0" placeholder="Search..." />
                        </InputGroup>*/}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
