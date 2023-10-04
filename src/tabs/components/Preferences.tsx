import React from 'react';
import { X, Sun, Moon } from '@team-hashnode/matrix-ui';
import * as Dialog from '@radix-ui/react-dialog';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export default function Preferences({ open = true }: { open: boolean }) {
    return (
        <Dialog.Root open={open}>
            <Dialog.Portal>
                <Dialog.Overlay
                    className="fixed inset-0 z-50 bg-slate-900 opacity-50 transition-opacity duration-300 ease-out dark:bg-slate-600"
                />
                <Dialog.Content
                    className="dark:bg-slate-950 z-50 bg-white absolute top-[50vh] left-[50vw] p-2 rounded-lg min-w-[600px] -translate-x-1/2 -translate-y-1/2"
                >
                    <Dialog.DialogTitle className="dark:text-slate-100 text-lg" >Preferences</Dialog.DialogTitle>
                    <Dialog.Close>
                        <button className=" absolute top-2 right-2 border-none bg-transparent outline-none focus:outline-none dark:text-white">
                            <X size="md" />
                        </button>
                        <div className="py-3">
                            <ToggleGroup.Root
                                className="ToggleGroup"
                                type="single"
                                defaultValue="center"
                            >
                                 <ToggleGroup.Item className="ToggleGroupItem dark:text-white" value="dark" aria-label="Left aligned">
                                    <Moon size="lg" />
                                </ToggleGroup.Item>
                                <ToggleGroup.Item className="ToggleGroupItem dark:text-white" value="light" aria-label="Center aligned">
                                    <Sun size="lg" />
                                </ToggleGroup.Item>
                            </ToggleGroup.Root>
                        </div>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}