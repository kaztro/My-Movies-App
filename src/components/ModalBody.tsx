import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
    Modal,
    ModalButton,
    ModalContent,
    ModalFooter,
    SlideAnimation,
    ModalTitle,
} from 'react-native-modals';

const ModalBody = ({ showModal, visible }) => {
    return (
        <Modal
            visible={visible}
            onTouchOutside={showModal}
            modalAnimation={
                new SlideAnimation({
                    slideFrom: 'bottom',
                })
            }
            >
        </Modal>
    );
};

export default ModalBody;

const styles = StyleSheet.create({});